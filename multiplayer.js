// ============================================================================
// multiplayer.js - Real-multiplayer "Battle Royale with friends" via Firebase
// Realtime Database. Loads AFTER game.js so it can freely call its globals
// (renderBoard, showScreen, showMessage, activeBoardId, getAvatarById, icon,
//  showRoundEnd, launchConfetti, launchSparkles, generateBoard, findWordOnBoard,
//  autoShuffleIfExhausted, HEBREW_DICTIONARY, gameState, currentGame, ...).
//
// The single source of truth is /rooms/{roomCode} in RTDB. Every client renders
// from a shared on('value') listener; the host is authoritative for round
// start/advance/end to avoid race conditions.
// ============================================================================

const MP = {
    roomCode: null,
    playerId: null,
    isHost: false,
    roomRef: null,
    serverOffset: 0,   // ms difference between server clock and this device
    lastRound: 0,      // detect round changes to (re)render the board once
    timer: null,       // local countdown interval
    room: null         // latest room snapshot
};

const ROUND_SECONDS = 60;
const TOTAL_ROUNDS = 5;

// ---- helpers ---------------------------------------------------------------

function mpAvailable() {
    if (typeof FIREBASE_READY === 'undefined' || !FIREBASE_READY || !db) {
        showMessage('מולטיפלייר לא זמין - יש להגדיר Firebase (firebase-config.js)', 'error');
        return false;
    }
    return true;
}

function getMyPlayerId() {
    let id = sessionStorage.getItem('zabangPlayerId');
    if (!id) {
        id = db.ref().push().key;
        sessionStorage.setItem('zabangPlayerId', id);
    }
    return id;
}

function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no confusing 0/O/1/I
    let code = '';
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function myPlayerNode() {
    return { name: gameState.playerName, avatarId: gameState.avatarId, score: 0, eliminated: false, connected: true, freezeUntil: 0 };
}

// ---- navigation entry points ----------------------------------------------

function showMultiplayerChoice() {
    if (!mpAvailable()) return;
    showScreen('mpChoiceScreen');
}

function showJoinScreen() {
    showScreen('mpJoinScreen');
    const input = document.getElementById('joinCodeInput');
    if (input) { input.value = ''; input.focus(); }
}

// ---- create / join ---------------------------------------------------------

async function createRoom() {
    if (!mpAvailable()) return;
    MP.playerId = getMyPlayerId();
    MP.isHost = true;

    // find an unused code
    let code;
    for (let attempt = 0; attempt < 10; attempt++) {
        code = generateRoomCode();
        const snap = await db.ref('rooms/' + code).once('value');
        if (!snap.exists()) break;
    }
    MP.roomCode = code;

    await db.ref('rooms/' + code).set({
        status: 'waiting',
        hostId: MP.playerId,
        currentRound: 0,
        totalRounds: TOTAL_ROUNDS,
        roundDurationSec: ROUND_SECONDS,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        players: { [MP.playerId]: myPlayerNode() }
    });

    attachPresence();
    listenToRoom(code);
    showScreen('mpLobbyScreen');
}

function joinRoomFromInput() {
    const input = document.getElementById('joinCodeInput');
    const code = (input.value || '').trim().toUpperCase();
    if (code.length !== 5) { showMessage('קוד חדר צריך להיות 5 תווים', 'error'); return; }
    joinRoom(code);
}

async function joinRoom(code) {
    if (!mpAvailable()) return;
    MP.playerId = getMyPlayerId();
    MP.isHost = false;

    const snap = await db.ref('rooms/' + code).once('value');
    if (!snap.exists()) { showMessage('חדר לא נמצא', 'error'); return; }
    const room = snap.val();
    if (room.status !== 'waiting') { showMessage('המשחק כבר התחיל', 'error'); return; }

    MP.roomCode = code;
    await db.ref('rooms/' + code + '/players/' + MP.playerId).set(myPlayerNode());

    attachPresence();
    listenToRoom(code);
    showScreen('mpLobbyScreen');
}

// mark this player disconnected if the tab closes / network drops
function attachPresence() {
    const connRef = db.ref('rooms/' + MP.roomCode + '/players/' + MP.playerId + '/connected');
    connRef.onDisconnect().set(false);
    // keep the server clock offset up to date for a synced countdown
    db.ref('.info/serverTimeOffset').on('value', s => { MP.serverOffset = s.val() || 0; });
}

// ---- the single shared realtime listener -----------------------------------

function listenToRoom(code) {
    MP.roomRef = db.ref('rooms/' + code);
    MP.roomRef.on('value', snap => {
        const room = snap.val();
        if (!room) { // room was deleted
            showMessage('החדר נסגר', 'warning');
            leaveMultiplayerRoom();
            showScreen('homeScreen');
            updateHomeUI();
            return;
        }
        MP.room = room;
        onRoomUpdate(room);
    });
}

function onRoomUpdate(room) {
    currentGame.mode = 'multiplayer';

    if (room.status === 'waiting') {
        renderLobby(room);
        return;
    }

    // host-disconnect guard
    const host = room.players && room.players[room.hostId];
    if (host && host.connected === false && room.status !== 'finished') {
        showMessage('המארח התנתק - צאו למסך הבית', 'warning');
    }

    if (room.status === 'playing') {
        // (re)render the board once per new round
        if (room.currentRound !== MP.lastRound) {
            MP.lastRound = room.currentRound;
            currentGame.board = room.board.slice();
            currentGame.foundWords = new Set();
            currentGame.playerScore = (room.players[MP.playerId] || {}).score || 0;
            currentGame.gameActive = true;
            document.getElementById('roundBadge').textContent = `סיבוב ${room.currentRound}/${room.totalRounds}`;
            document.getElementById('playerBattleScore').textContent = currentGame.playerScore;
            renderBoard('battleBoard');
            // "shuffle opponents' score" makes no sense against real people - hide it
            const shuffleBtn = document.getElementById('battleShuffleBtn');
            if (shuffleBtn) shuffleBtn.style.display = 'none';
            showScreen('battleScreen');
            startMultiplayerTimer(room);
        }
        updateMultiplayerUI(room);
        applyFreezeFromRoom(room);
    } else if (room.status === 'roundEnd') {
        stopMultiplayerTimer();
        showMultiplayerRoundEnd(room);
    } else if (room.status === 'finished') {
        stopMultiplayerTimer();
        showMultiplayerResult(room);
    }
}

// ---- lobby -----------------------------------------------------------------

function renderLobby(room) {
    document.getElementById('lobbyRoomCode').textContent = MP.roomCode;

    const listEl = document.getElementById('lobbyPlayers');
    listEl.innerHTML = '';
    Object.entries(room.players || {}).forEach(([pid, p]) => {
        const isSelf = pid === MP.playerId;
        listEl.innerHTML += `<div class="player-status${isSelf ? ' self' : ''}">
            <div class="status-avatar">${getAvatarById(p.avatarId).svg}</div>
            <span>${p.name}${pid === room.hostId ? ' 👑' : ''}</span>
        </div>`;
    });

    const startBtn = document.getElementById('lobbyStartBtn');
    const waiting = document.getElementById('lobbyWaiting');
    const canStart = MP.isHost && Object.keys(room.players || {}).length >= 2;
    startBtn.style.display = canStart ? 'block' : 'none';
    waiting.style.display = MP.isHost
        ? (canStart ? 'none' : 'block')
        : 'block';
    if (MP.isHost && !canStart) waiting.textContent = 'ממתין לשחקנים נוספים שיצטרפו...';
    else if (!MP.isHost) waiting.textContent = 'ממתין למארח שיתחיל את המשחק...';
}

function copyRoomCode() {
    if (!MP.roomCode) return;
    if (navigator.clipboard) navigator.clipboard.writeText(MP.roomCode).catch(() => {});
    const copied = document.getElementById('lobbyCopied');
    if (copied) { copied.style.display = 'block'; setTimeout(() => copied.style.display = 'none', 1500); }
}

// ---- host: start / advance rounds ------------------------------------------

function hostStartMultiplayerGame() {
    if (!MP.isHost) return;
    startMultiplayerRound(1);
}

function startMultiplayerRound(roundNum) {
    if (!MP.isHost) return;
    const board = generateBoard();
    const updates = {
        status: 'playing',
        currentRound: roundNum,
        board: board,
        roundStartTime: firebase.database.ServerValue.TIMESTAMP
    };
    // reset every non-eliminated player's per-round score/foundWords
    Object.entries(MP.room.players || {}).forEach(([pid, p]) => {
        if (!p.eliminated) {
            updates['players/' + pid + '/score'] = 0;
            updates['players/' + pid + '/foundWords'] = null;
            updates['players/' + pid + '/freezeUntil'] = 0;
        }
    });
    MP.roomRef.update(updates);
}

function hostNextMultiplayerRound() {
    if (!MP.isHost) return;
    startMultiplayerRound((MP.room.currentRound || 1) + 1);
}

// ---- synced timer ----------------------------------------------------------

function startMultiplayerTimer(room) {
    stopMultiplayerTimer();
    MP.timer = setInterval(() => {
        const me = (MP.room.players || {})[MP.playerId] || {};
        const timerEl = document.getElementById('battleTimerDisplay');

        // frozen? (an opponent hit me) - show ice, don't advance my perceived clock
        const now = Date.now() + MP.serverOffset;
        if (me.freezeUntil && now < me.freezeUntil) {
            timerEl.classList.add('frozen');
            return;
        }
        timerEl.classList.remove('frozen');

        const elapsed = (now - (room.roundStartTime || now)) / 1000;
        const remaining = Math.max(0, Math.ceil((room.roundDurationSec || ROUND_SECONDS) - elapsed));
        timerEl.textContent = remaining;

        if (remaining <= 0) {
            stopMultiplayerTimer();
            currentGame.gameActive = false;
            // only the host writes the authoritative round result
            if (MP.isHost) endMultiplayerRound();
        }
    }, 250);
}

function stopMultiplayerTimer() {
    if (MP.timer) { clearInterval(MP.timer); MP.timer = null; }
}

// ---- host: authoritative round end -----------------------------------------

function endMultiplayerRound() {
    if (!MP.isHost) return;
    const players = MP.room.players || {};
    const active = Object.entries(players).filter(([, p]) => !p.eliminated);

    // pick the loser: disconnected first, then lowest score
    active.sort((a, b) => {
        const [, pa] = a, [, pb] = b;
        if ((pa.connected === false) !== (pb.connected === false)) return pa.connected === false ? -1 : 1;
        return (pa.score || 0) - (pb.score || 0);
    });
    const [loserId] = active[0] || [];

    const isFinal = (MP.room.currentRound || 1) >= (MP.room.totalRounds || TOTAL_ROUNDS);
    const updates = {};
    if (loserId) updates['players/' + loserId + '/eliminated'] = true;

    const remainingAfter = active.length - 1;
    if (isFinal || remainingAfter <= 1) {
        // winner = the highest scorer among the still-active (non-loser) players
        const survivors = active.filter(([pid]) => pid !== loserId);
        survivors.sort((a, b) => (b[1].score || 0) - (a[1].score || 0));
        updates['status'] = 'finished';
        updates['winnerId'] = survivors.length ? survivors[0][0] : loserId;
        updates['loserId'] = loserId || '';
    } else {
        updates['status'] = 'roundEnd';
        updates['loserId'] = loserId || '';
    }
    MP.roomRef.update(updates);
}

// ---- round-end & final screens ---------------------------------------------

function buildStandings(room) {
    return Object.values(room.players || {})
        .map(p => ({ name: p.name, score: p.score || 0 }))
        .sort((a, b) => b.score - a.score);
}

function showMultiplayerRoundEnd(room) {
    const standings = buildStandings(room);
    const loserName = (room.players[room.loserId] || {}).name || '';
    // reuse the existing round-end UI renderer
    showRoundEnd(standings, loserName);

    const iWasEliminated = room.loserId === MP.playerId;
    const nextBtn = document.getElementById('nextRoundBtn');
    const waiting = document.getElementById('roundEndWaiting');
    if (iWasEliminated) {
        // eliminated players go straight to a "you're out" result and can leave
        document.getElementById('eliminationNotice').textContent = 'הודחת מהמשחק!';
    }
    // only the host advances the round
    if (nextBtn) nextBtn.style.display = MP.isHost ? 'block' : 'none';
    if (waiting) waiting.style.display = MP.isHost ? 'none' : 'block';
}

function showMultiplayerResult(room) {
    const iWon = room.winnerId === MP.playerId;
    const title = document.getElementById('victoryTitle');
    const subtitle = document.getElementById('victorySubtitle');
    const rewards = document.getElementById('victoryRewards');

    if (iWon) {
        title.innerHTML = `${icon('trophy')} ניצחת! ${icon('trophy')}`;
        subtitle.textContent = 'ניצחת את כל החברים!';
        gameState.coins += 100;
        saveGameState();
        updateHomeUI();
        rewards.innerHTML = `<div class="reward-box"><span class="coin-icon icon">${ICONS.coin}</span><span>+100 מטבעות!</span></div>`;
        launchConfetti();
    } else {
        const winnerName = (room.players[room.winnerId] || {}).name || 'שחקן אחר';
        title.innerHTML = `${icon('close')} המשחק נגמר ${icon('close')}`;
        subtitle.textContent = `${winnerName} ניצח/ה את המשחק`;
        rewards.innerHTML = '';
    }
    showScreen('victoryScreen');
}

// ---- word submission (called from game.js endDrag) -------------------------

function submitMultiplayerWord(word, newTotalScore) {
    if (!MP.roomCode || !MP.playerId) return;
    const base = 'rooms/' + MP.roomCode + '/players/' + MP.playerId;
    db.ref(base + '/score').set(newTotalScore);
    db.ref(base + '/foundWords/' + word).set(true);
}

// ---- opponents UI ----------------------------------------------------------

function updateMultiplayerUI(room) {
    const statusEl = document.getElementById('playersStatus');
    if (!statusEl) return;
    statusEl.innerHTML = '';
    Object.entries(room.players || {}).forEach(([pid, p]) => {
        if (p.eliminated) return;
        const isSelf = pid === MP.playerId;
        const dim = p.connected === false ? ' style="opacity:.5"' : '';
        statusEl.innerHTML += `<div class="player-status${isSelf ? ' self' : ''}"${dim}>
            <div class="status-avatar">${getAvatarById(p.avatarId).svg}</div>
            <span>${isSelf ? 'אתה' : p.name}</span><span>${p.score || 0}</span>
        </div>`;
    });
    // keep my own big score display in sync with the server value
    const me = (room.players || {})[MP.playerId];
    if (me) document.getElementById('playerBattleScore').textContent = me.score || 0;
}

// ---- power-ups (multiplayer variants) --------------------------------------

function useMultiplayerHint() {
    if (!hasInfiniteCoins() && gameState.coins < 20) { showMessage('אין מספיק מטבעות! (רמז עולה 20)', 'error'); return; }

    let indices = findWordOnBoard();
    if (indices.length === 0) { autoShuffleIfExhausted(); indices = findWordOnBoard(); if (indices.length === 0) return; }

    const word = indices.map(i => currentGame.board[i]).join('');
    const points = HEBREW_DICTIONARY[word];

    if (!hasInfiniteCoins()) gameState.coins -= 20;
    currentGame.foundWords.add(word);
    currentGame.playerScore += points;
    document.getElementById('playerBattleScore').textContent = currentGame.playerScore;
    submitMultiplayerWord(word, currentGame.playerScore);
    saveGameState();
    updateHomeUI();

    const tiles = document.querySelectorAll('#battleBoard .letter-tile');
    indices.forEach(i => tiles[i]?.classList.add('selected'));
    setTimeout(() => tiles.forEach(t => t.classList.remove('selected')), 1500);

    showMessage(`${word} - כל הכבוד! +${points}`, 'success');
    launchSparkles();
}

// freeze the current highest-scoring opponent for 8 seconds (on their device)
function useMultiplayerFreeze() {
    if (!hasInfiniteCoins() && gameState.coins < 40) { showMessage('אין מספיק מטבעות! (הקפאה עולה 40)', 'error'); return; }
    const players = (MP.room || {}).players || {};
    const opponents = Object.entries(players)
        .filter(([pid, p]) => pid !== MP.playerId && !p.eliminated && p.connected !== false)
        .sort((a, b) => (b[1].score || 0) - (a[1].score || 0));
    if (opponents.length === 0) { showMessage('אין יריבים להקפיא', 'warning'); return; }

    if (!hasInfiniteCoins()) gameState.coins -= 40;
    saveGameState();
    updateHomeUI();

    const [targetId, target] = opponents[0];
    const until = Date.now() + MP.serverOffset + 8000;
    db.ref('rooms/' + MP.roomCode + '/players/' + targetId + '/freezeUntil').set(until);
    showMessage(`${target.name} הוקפא/ה ל-8 שניות!`, 'info');
}

// react to a freeze written to MY node by an opponent (visual only; the timer
// tick in startMultiplayerTimer already checks freezeUntil to pause my clock)
function applyFreezeFromRoom(room) {
    const me = (room.players || {})[MP.playerId];
    if (!me) return;
    const now = Date.now() + MP.serverOffset;
    if (me.freezeUntil && now < me.freezeUntil && !MP._freezeNotified) {
        MP._freezeNotified = true;
        showMessage('הוקפאת על ידי יריב!', 'warning');
        setTimeout(() => { MP._freezeNotified = false; }, 8000);
    }
}

// ---- power-up dispatchers (battle screen is shared bots/multiplayer) --------

function handleBattleHint() {
    if (currentGame.mode === 'multiplayer') useMultiplayerHint();
    else useBattleHint();
}

function handleBattleFreeze() {
    if (currentGame.mode === 'multiplayer') useMultiplayerFreeze();
    else useBattleFreeze();
}

// ---- leave / cleanup -------------------------------------------------------

function leaveMultiplayerRoom() {
    stopMultiplayerTimer();
    if (MP.roomRef) { MP.roomRef.off(); MP.roomRef = null; }
    if (MP.roomCode && MP.playerId && db) {
        // if we're still just waiting in the lobby, remove our slot entirely
        if (MP.room && MP.room.status === 'waiting') {
            db.ref('rooms/' + MP.roomCode + '/players/' + MP.playerId).remove();
        } else {
            db.ref('rooms/' + MP.roomCode + '/players/' + MP.playerId + '/connected').set(false);
        }
    }
    MP.roomCode = null;
    MP.isHost = false;
    MP.room = null;
    MP.lastRound = 0;
    if (currentGame.mode === 'multiplayer') currentGame.mode = null;
}
