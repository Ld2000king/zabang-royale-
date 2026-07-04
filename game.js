// Hebrew dictionary
const HEBREW_DICTIONARY = {
    'בית': 100, 'שלום': 250, 'זבאנג': 500, 'מחשב': 250, 'כלב': 100, 'חתול': 100, 'שולחן': 250, 'כיסא': 100, 'אוטו': 100,
    'אמא': 100, 'אבא': 100, 'אחות': 250, 'סבתא': 250, 'משפחה': 500, 'ילד': 100, 'ילדה': 100, 'אישה': 250, 'ספר': 100,
    'מחברת': 250, 'עיפרון': 250, 'תיק': 100, 'שמש': 100, 'ירח': 100, 'כוכב': 100, 'שמיים': 250, 'ארץ': 100, 'מים': 100,
    'רוח': 100, 'אדמה': 100, 'פרח': 100, 'דשא': 100, 'אבן': 100, 'נהר': 100, 'דרך': 100, 'רחוב': 100, 'עיר': 100, 'כפר': 100,
    'עבודה': 250, 'משחק': 100, 'כדור': 100, 'בובה': 100, 'אוכל': 100, 'לחם': 100, 'בשר': 100, 'חלב': 100, 'גבינה': 250,
    'ביצה': 100, 'תפוח': 100, 'בננה': 100, 'תפוז': 100, 'ענבים': 100, 'אבטיח': 250, 'מלון': 100, 'בוקר': 100,
    'צהריים': 250, 'ערב': 100, 'לילה': 100, 'יום': 100, 'שבוע': 100, 'חודש': 100, 'שנה': 100, 'אתמול': 100, 'היום': 100,
    'מחר': 100, 'שעון': 100, 'זמן': 100, 'רגע': 100, 'דקה': 100, 'שעה': 100, 'חבר': 100, 'חברה': 250, 'אהבה': 100,
    'שמחה': 100, 'עצב': 100, 'כעס': 100, 'פחד': 100, 'תקווה': 250, 'חלום': 100, 'מציאות': 250, 'אמת': 100, 'שקר': 100,
    'טוב': 100, 'יפה': 100, 'מכוער': 250, 'גדול': 100, 'קטן': 100, 'חדש': 100, 'ישן': 100, 'חם': 100, 'קר': 100,
    'אדום': 100, 'כחול': 100, 'ירוק': 100, 'צהוב': 100, 'לבן': 100, 'שחור': 100, 'עליון': 100, 'תחתון': 100, 'ימין': 100, 'שמאל': 100,

    // Animals
    'סוס': 100, 'פרה': 100, 'כבשה': 100, 'תרנגול': 250, 'ציפור': 250, 'נחש': 100, 'ארנב': 100, 'דוב': 100, 'אריה': 100,
    'נמר': 100, 'זאב': 100, 'שועל': 100, 'קוף': 100, 'פיל': 100, 'תולעת': 250, 'פרפר': 100, 'דבורה': 250, 'נמלה': 100,
    'עכביש': 250, 'עכבר': 100, 'חזיר': 100,

    // Food & drink
    'עוגה': 100, 'עוגיה': 250, 'גלידה': 250, 'שוקולד': 250, 'ממתק': 100, 'מיץ': 100, 'קפה': 100, 'סוכר': 100, 'מלח': 100,
    'פלפל': 100, 'בצל': 100, 'שום': 100, 'גזר': 100, 'מלפפון': 250, 'עגבניה': 250, 'חסה': 100, 'קמח': 100,

    // Family & people
    'תינוק': 250, 'נער': 100, 'נערה': 100, 'מורה': 100, 'רופא': 100, 'רופאה': 250, 'שוטר': 100, 'טבח': 100, 'נהג': 100,
    'חייל': 100, 'מלך': 100, 'מלכה': 100, 'נסיך': 100, 'נסיכה': 250, 'דוד': 100, 'דודה': 100, 'נכד': 100, 'נכדה': 100,

    // Nature & weather
    'גשם': 100, 'שלג': 100, 'ברד': 100, 'ענן': 100, 'ברק': 100, 'רעם': 100, 'קשת': 100, 'אגם': 100, 'גבעה': 100,
    'עמק': 100, 'מדבר': 100, 'יער': 100, 'עלה': 100, 'ענף': 100, 'שורש': 250, 'זרע': 100,

    // Home & objects
    'דלת': 100, 'חלון': 100, 'קיר': 100, 'רצפה': 100, 'תקרה': 100, 'מיטה': 100, 'כרית': 100, 'שמיכה': 250, 'מגבת': 100,
    'סבון': 100, 'מברשת': 250, 'מראה': 100, 'מנורה': 250, 'שטיח': 100, 'ארון': 100, 'מקרר': 100, 'תנור': 100, 'כיור': 100,
    'אמבטיה': 250, 'מטבח': 100, 'חדר': 100, 'מסדרון': 250,

    // School
    'לוח': 100, 'סרגל': 100, 'ילקוט': 250, 'כיתה': 100, 'מנהל': 100, 'תלמיד': 250, 'תלמידה': 250, 'בחינה': 250,
    'שיעור': 250, 'הפסקה': 250,

    // Body
    'ראש': 100, 'עין': 100, 'אוזן': 100, 'לשון': 100, 'רגל': 100, 'אצבע': 100, 'ברך': 100, 'כתף': 100, 'בטן': 100,
    'עור': 100, 'שיער': 100, 'ציפורן': 250,

    // Clothing
    'חולצה': 250, 'מכנסיים': 250, 'שמלה': 100, 'נעל': 100, 'גרב': 100, 'כובע': 100, 'מעיל': 100, 'חגורה': 250, 'כפפה': 100,

    // Transportation
    'אופניים': 250, 'רכבת': 100, 'מטוס': 100, 'ספינה': 250, 'אוטובוס': 250, 'מונית': 250, 'אופנוע': 250,

    // Music, sports & feelings
    'כדורגל': 250, 'כדורסל': 250, 'שחייה': 250, 'ריצה': 100, 'ניצחון': 250, 'הפסד': 100, 'גיטרה': 250, 'תוף': 100,
    'חליל': 100, 'שיר': 100, 'ריקוד': 250, 'צחוק': 100, 'בכי': 100,

    // Colors & descriptions
    'ורוד': 100, 'סגול': 100, 'אפור': 100, 'חום': 100, 'מהיר': 100, 'איטי': 100, 'חזק': 100, 'חלש': 100, 'עשיר': 100,
    'עני': 100, 'חכם': 100, 'טיפש': 100, 'אמיץ': 100, 'פחדן': 100,

    // Numbers
    'אחד': 100, 'שתיים': 250, 'שלוש': 100, 'ארבע': 100, 'חמש': 100, 'שבע': 100, 'שמונה': 250, 'תשע': 100, 'עשר': 100
};

const SHOP_ITEMS = [
    { icon: 'hint', name: 'רמז', desc: 'מסמן בלוח מילה שעוד לא מצאת', cost: 20 },
    { icon: 'shuffle', name: 'ערבב לוח', desc: 'מחליף את אותיות הלוח', cost: 10 },
    { icon: 'freeze', name: 'הקפא זמן', desc: 'מקפיא את השעון ל-5 שניות', cost: 30 },
    { icon: 'freezeOpponents', name: 'הקפא יריבים', desc: 'באטל רויאל: מקפיא את הבוטים ל-8 שניות', cost: 40 },
    { icon: 'tornado', name: 'ערבב ליריבים', desc: 'באטל רויאל: חותך את ניקוד הבוטים בחצי', cost: 25 }
];

const BOT_NAMES = ['דני', 'מיכל', 'אורי', 'נועה', 'יוסי'];

// Game State
let gameState = {
    playerName: 'שחקן',
    coins: 100,
    hints: 3,
    totalScore: 0,
    gamesPlayed: 0,
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    avatarId: 'dan'
};

let currentGame = {
    mode: null, // 'single' or 'battle'
    board: [],
    gridSize: 5,
    foundWords: new Set(),
    score: 0,
    timeLeft: 60,
    selectedIndices: new Set(),
    currentWord: '',
    gameActive: false,
    timer: null,
    freezeLeft: 0,
    selectedLetters: []
};

let battleState = {
    currentRound: 1,
    totalRounds: 5,
    players: [],
    playerScore: 0,
    botsFrozenSeconds: 0,
    totalCoinsEarned: 0
};

// Initialize
window.addEventListener('load', () => {
    loadGameState();
    loadCustomWords();
    updateHomeUI();
});

// Storage
function loadGameState() {
    const saved = localStorage.getItem('zabangState');
    if (saved) gameState = JSON.parse(saved);
    if (!gameState.avatarId) gameState.avatarId = 'dan';
}

function saveGameState() {
    localStorage.setItem('zabangState', JSON.stringify(gameState));
}

function hasInfiniteCoins() {
    return gameState.playerName.trim().toLowerCase() === 'ld2000';
}

function coinsText() {
    return hasInfiniteCoins() ? '∞' : gameState.coins;
}

function updateHomeUI() {
    document.getElementById('playerName').textContent = gameState.playerName;
    document.getElementById('homeCoins').textContent = coinsText();
    document.getElementById('levelBadge').textContent = `רמה ${gameState.level}`;
    document.getElementById('shopCoins').textContent = coinsText();
    document.getElementById('homeAvatar').innerHTML = getAvatarById(gameState.avatarId).svg;
}

// Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    // Long screens (like the profile) may leave the page scrolled down -
    // every screen should open from its top
    window.scrollTo(0, 0);
}

function goHome() {
    if (currentGame.timer) clearInterval(currentGame.timer);
    // Multiplayer: detach Firebase listeners / leave the room before going home
    if (currentGame.mode === 'multiplayer' && typeof leaveMultiplayerRoom === 'function') {
        leaveMultiplayerRoom();
    }
    showScreen('homeScreen');
    updateHomeUI();
}

function showGameModeSelection() {
    showScreen('gameModeScreen');
}

function showInstructions() {
    showScreen('instructionsScreen');
}

function goToShop() {
    renderShop();
    showScreen('shopScreen');
}

function goToProfile() {
    renderProfile();
    showScreen('profileScreen');
}

// Board Generation
function generateBoard() {
    const hebrewLetters = 'אבגדהוזחטיכלמנסעפצקרשת';
    const weights = { 'א': 8, 'ב': 3, 'ג': 2, 'ד': 3, 'ה': 8, 'ו': 4, 'ז': 1, 'ח': 2, 'י': 8, 'ל': 6, 'מ': 5, 'נ': 5, 'ס': 1, 'ע': 1, 'פ': 1, 'ק': 1, 'ר': 8, 'ש': 6, 'ת': 4 };

    let board = [];
    for (let i = 0; i < currentGame.gridSize * currentGame.gridSize; i++) {
        board.push('');
    }

    // Plant some words
    const words = Array.from(Object.keys(HEBREW_DICTIONARY)).sort(() => Math.random() - 0.5).slice(0, 5);

    for (let word of words) {
        let planted = false;
        for (let attempt = 0; attempt < 20 && !planted; attempt++) {
            const horizontal = Math.random() > 0.5;
            const row = Math.floor(Math.random() * currentGame.gridSize);
            const col = Math.floor(Math.random() * currentGame.gridSize);

            if (horizontal && col + word.length <= currentGame.gridSize) {
                let canPlace = true;
                for (let i = 0; i < word.length; i++) {
                    if (board[row * currentGame.gridSize + col + i] !== '' && board[row * currentGame.gridSize + col + i] !== word[i]) {
                        canPlace = false;
                        break;
                    }
                }
                if (canPlace) {
                    for (let i = 0; i < word.length; i++) {
                        board[row * currentGame.gridSize + col + i] = word[i];
                    }
                    planted = true;
                }
            } else if (!horizontal && row + word.length <= currentGame.gridSize) {
                let canPlace = true;
                for (let i = 0; i < word.length; i++) {
                    if (board[(row + i) * currentGame.gridSize + col] !== '' && board[(row + i) * currentGame.gridSize + col] !== word[i]) {
                        canPlace = false;
                        break;
                    }
                }
                if (canPlace) {
                    for (let i = 0; i < word.length; i++) {
                        board[(row + i) * currentGame.gridSize + col] = word[i];
                    }
                    planted = true;
                }
            }
        }
    }

    // Fill remaining
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            const letters = Object.keys(weights);
            const rand = Math.random() * Object.values(weights).reduce((a, b) => a + b);
            let sum = 0;
            for (let letter of letters) {
                sum += weights[letter];
                if (rand < sum) {
                    board[i] = letter;
                    break;
                }
            }
        }
    }

    return board;
}

// Render board
function renderBoard(boardId = 'board') {
    const boardEl = document.getElementById(boardId);
    boardEl.innerHTML = '';

    currentGame.board.forEach((letter, idx) => {
        const tile = document.createElement('div');
        tile.className = 'letter-tile';
        tile.textContent = letter;
        tile.dataset.index = idx;
        boardEl.appendChild(tile);
    });

    boardEl.onpointerdown = (e) => {
        if (!currentGame.gameActive) return;
        e.preventDefault();
        isDragging = true;
        dragPath = [];
        detectTileAt(e.clientX, e.clientY);
    };
}

// Drag logic - works on both mouse and touch.
// Detection runs at document level with elementFromPoint, because on
// touch devices the pointer gets captured by the first tile touched.
let isDragging = false;
let dragPath = [];

document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    detectTileAt(e.clientX, e.clientY);
}, { passive: false });

document.addEventListener('pointerup', () => {
    if (isDragging) endDrag();
});

document.addEventListener('pointercancel', () => {
    if (isDragging) {
        isDragging = false;
        dragPath = [];
        clearSelection();
    }
});

function detectTileAt(x, y) {
    const el = document.elementFromPoint(x, y);
    if (!el || !el.classList.contains('letter-tile')) return;

    // Only register when the finger is near the tile center,
    // so neighboring letters aren't picked up by accident
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const radius = Math.min(rect.width, rect.height) * 0.42;
    if (Math.abs(x - cx) > radius || Math.abs(y - cy) > radius) return;

    const idx = parseInt(el.dataset.index, 10);
    if (!dragPath.includes(idx)) {
        dragPath.push(idx);
        updateSelection();
    }
}

function endDrag() {
    isDragging = false;
    const word = dragPath.map(i => currentGame.board[i]).join('');

    if (word.length < 3) {
        showMessage('קצר מדי!', 'error');
    } else if (HEBREW_DICTIONARY[word] === undefined) {
        showWordSubmitToast(word);
    } else if (currentGame.foundWords.has(word)) {
        showMessage('כבר מצאת את המילה!', 'warning');
    } else {
        const points = HEBREW_DICTIONARY[word];
        currentGame.foundWords.add(word);
        currentGame.score += points;

        if (currentGame.mode === 'single') {
            document.getElementById('scoreDisplay').textContent = currentGame.score;
        } else if (currentGame.mode === 'multiplayer') {
            currentGame.playerScore += points;
            document.getElementById('playerBattleScore').textContent = currentGame.playerScore;
            // Write the new total to Firebase so opponents see it live
            if (typeof submitMultiplayerWord === 'function') submitMultiplayerWord(word, currentGame.playerScore);
        } else {
            currentGame.playerScore += points;
            document.getElementById('playerBattleScore').textContent = currentGame.playerScore;
        }

        updateFoundWords();
        showMessage(`כל הכבוד! +${points}`, 'success');
        launchSparkles();
        autoShuffleIfExhausted();
    }

    dragPath = [];
    clearSelection();
}

function activeBoardId() {
    // 'battle' and 'multiplayer' both use the battle board; only 'single' uses #board
    return currentGame.mode === 'single' ? 'board' : 'battleBoard';
}

// Called after any word is found (drag or hint) - if no valid unfound
// words remain on the board, reshuffle it automatically so play can continue
function autoShuffleIfExhausted() {
    if (findWordOnBoard().length === 0) {
        currentGame.board = currentGame.board.sort(() => Math.random() - 0.5);
        renderBoard(activeBoardId());
        showMessage('נגמרו המילים — הלוח עורבב אוטומטית!', 'info');
    }
}

function updateSelection() {
    document.querySelectorAll(`#${activeBoardId()} .letter-tile`).forEach(tile => {
        const idx = parseInt(tile.dataset.index, 10);
        tile.classList.toggle('selected', dragPath.includes(idx));
    });

    const word = dragPath.map(i => currentGame.board[i]).join('');
    const display = document.getElementById(currentGame.mode === 'single' ? 'currentWordDisplay' : 'battleWordDisplay');
    display.textContent = word;
}

function clearSelection() {
    document.querySelectorAll('.letter-tile').forEach(tile => tile.classList.remove('selected'));
    const display = document.getElementById(currentGame.mode === 'single' ? 'currentWordDisplay' : 'battleWordDisplay');
    display.textContent = '';
}

// Messages
function showMessage(msg, type = 'info') {
    const msgEl = document.createElement('div');
    msgEl.className = `message ${type}`;
    msgEl.textContent = msg;
    document.body.appendChild(msgEl);
    setTimeout(() => msgEl.remove(), 2000);
}

const CELEBRATION_COLORS = ['#00e5ff', '#39ff6a', '#ffd60a', '#ff2ec4', '#8b5cf6', '#ff3b5c'];

// Big confetti burst - victory moments
function launchConfetti(count = 70) {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)];
        piece.style.animationDelay = `${Math.random() * 0.4}s`;
        piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 4000);
}

// Small sparkle burst - every word found
function launchSparkles(count = 10) {
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'sparkle-piece';
        piece.style.left = `${40 + Math.random() * 20}vw`;
        piece.style.top = `${35 + Math.random() * 20}vh`;
        piece.style.background = CELEBRATION_COLORS[Math.floor(Math.random() * CELEBRATION_COLORS.length)];
        piece.style.animationDelay = `${Math.random() * 0.15}s`;
        container.appendChild(piece);
    }

    setTimeout(() => container.remove(), 1000);
}

// Invalid word: show for 1.5s a clickable "real word?" toast.
// Clicking sends the word to the pending-review list (the game creator
// approves or rejects it in the profile screen).
function showWordSubmitToast(word) {
    const msgEl = document.createElement('div');
    msgEl.className = 'message error word-submit-toast';
    msgEl.innerHTML = `<span>לא במאגר</span><button class="submit-word-btn">מילה אמיתית? ${icon('submit')}</button>`;
    msgEl.querySelector('button').addEventListener('pointerdown', (e) => {
        e.stopPropagation();
        submitWordForReview(word);
        msgEl.remove();
    });
    document.body.appendChild(msgEl);
    setTimeout(() => msgEl.remove(), 1500);
}

function submitWordForReview(word) {
    const subs = JSON.parse(localStorage.getItem('zabangSubmissions') || '[]');
    if (!subs.some(s => s.word === word)) {
        subs.push({ word: word, date: new Date().toISOString() });
        localStorage.setItem('zabangSubmissions', JSON.stringify(subs));
    }
    showMessage('תודה! המילה נשלחה לבדיקה', 'success');
}

function pointsForWord(word) {
    if (word.length >= 5) return 500;
    if (word.length === 4) return 250;
    return 100;
}

// Words the creator approved are stored locally and merged into the
// dictionary on every launch
function loadCustomWords() {
    const custom = JSON.parse(localStorage.getItem('zabangCustomWords') || '[]');
    custom.forEach(w => { HEBREW_DICTIONARY[w] = pointsForWord(w); });
}

// Single Player
function startSinglePlayer() {
    currentGame.mode = 'single';
    currentGame.board = generateBoard();
    currentGame.foundWords.clear();
    currentGame.score = 0;
    currentGame.timeLeft = 60;
    currentGame.freezeLeft = 0;
    currentGame.gameActive = true;

    showScreen('gameScreen');
    renderBoard('board');
    updateFoundWords();
    startTimer('single');
}

function updateFoundWords() {
    const list = document.getElementById('foundWordsList');
    list.innerHTML = '';
    currentGame.foundWords.forEach(word => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${word}</span><span class="points">+${HEBREW_DICTIONARY[word]}</span>`;
        list.appendChild(li);
    });
}

function startTimer(mode) {
    if (currentGame.timer) clearInterval(currentGame.timer);

    currentGame.timer = setInterval(() => {
        const timerEl = document.getElementById(mode === 'single' ? 'timerDisplay' : 'battleTimerDisplay');

        // While frozen the clock does not move - it just shows the ice state
        if (currentGame.freezeLeft > 0) {
            currentGame.freezeLeft--;
            timerEl.classList.add('frozen');
            timerEl.textContent = currentGame.timeLeft;
            return;
        }

        timerEl.classList.remove('frozen');
        currentGame.timeLeft--;
        timerEl.textContent = currentGame.timeLeft;

        if (currentGame.timeLeft <= 0) {
            clearInterval(currentGame.timer);
            endRound(mode);
        }
    }, 1000);
}

function endRound(mode) {
    currentGame.gameActive = false;

    if (mode === 'single') {
        gameState.coins += Math.floor(currentGame.score / 10);
        gameState.totalScore += currentGame.score;
        gameState.gamesPlayed++;
        saveGameState();
        showGameOverDialog();
    } else {
        endBattleRound();
    }
}

function showGameOverDialog() {
    document.getElementById('srScore').textContent = currentGame.score;
    document.getElementById('srWords').textContent = currentGame.foundWords.size;
    document.getElementById('srCoins').textContent = `+${Math.floor(currentGame.score / 10)} מטבעות`;
    updateHomeUI();
    showScreen('singleResultScreen');
}

// Power-ups
function useHint() {
    if (!hasInfiniteCoins() && gameState.coins < 20) {
        showMessage('אין מספיק מטבעות! (רמז עולה 20)', 'error');
        return;
    }

    let indices = findWordOnBoard();
    if (indices.length === 0) {
        autoShuffleIfExhausted();
        indices = findWordOnBoard();
        if (indices.length === 0) return;
    }

    const word = indices.map(i => currentGame.board[i]).join('');
    const points = HEBREW_DICTIONARY[word];

    if (!hasInfiniteCoins()) gameState.coins -= 20;
    currentGame.foundWords.add(word);
    currentGame.score += points;
    document.getElementById('scoreDisplay').textContent = currentGame.score;
    updateFoundWords();
    saveGameState();
    updateHomeUI();

    // Flash the word's tiles for 1.5 seconds
    const tiles = document.querySelectorAll(`#${activeBoardId()} .letter-tile`);
    indices.forEach(i => tiles[i]?.classList.add('selected'));
    setTimeout(() => tiles.forEach(t => t.classList.remove('selected')), 1500);

    showMessage(`${word} - כל הכבוד! +${points}`, 'success');
    launchSparkles();
}

// Find a dictionary word that actually exists on the board (horizontal or
// vertical) and hasn't been found yet - same logic as the Flutter version
function findWordOnBoard() {
    const size = currentGame.gridSize;
    for (const word of Object.keys(HEBREW_DICTIONARY)) {
        if (currentGame.foundWords.has(word) || word.length > size || word.length < 3) continue;

        for (let r = 0; r < size; r++) {
            for (let c = 0; c <= size - word.length; c++) {
                let ok = true;
                const idxs = [];
                for (let i = 0; i < word.length; i++) {
                    const idx = r * size + c + i;
                    if (currentGame.board[idx] !== word[i]) { ok = false; break; }
                    idxs.push(idx);
                }
                if (ok) return idxs;
            }
        }

        for (let c = 0; c < size; c++) {
            for (let r = 0; r <= size - word.length; r++) {
                let ok = true;
                const idxs = [];
                for (let i = 0; i < word.length; i++) {
                    const idx = (r + i) * size + c;
                    if (currentGame.board[idx] !== word[i]) { ok = false; break; }
                    idxs.push(idx);
                }
                if (ok) return idxs;
            }
        }
    }
    return [];
}

function useShuffle() {
    if (!hasInfiniteCoins() && gameState.coins < 10) {
        showMessage('אין מטבעות!', 'error');
        return;
    }

    if (!hasInfiniteCoins()) gameState.coins -= 10;
    currentGame.board = currentGame.board.sort(() => Math.random() - 0.5);
    renderBoard(currentGame.mode === 'single' ? 'board' : 'battleBoard');
    updateHomeUI();
    showMessage('הלוח עורבב!', 'success');
}

function useFreeze() {
    if (!hasInfiniteCoins() && gameState.coins < 30) {
        showMessage('אין מטבעות!', 'error');
        return;
    }

    if (!hasInfiniteCoins()) gameState.coins -= 30;
    currentGame.freezeLeft += 5;
    saveGameState();
    updateHomeUI();
    showMessage('הזמן הוקפא ל-5 שניות!', 'info');
}

function useBattleFreeze() {
    if (!hasInfiniteCoins() && gameState.coins < 40) {
        showMessage('אין מטבעות!', 'error');
        return;
    }
    if (!hasInfiniteCoins()) gameState.coins -= 40;
    battleState.botsFrozenSeconds = 8;
    saveGameState();
    updateHomeUI();
    showMessage('היריבים הוקפאו ל-8 שניות!', 'info');
}

function useBattleShuffle() {
    if (!hasInfiniteCoins() && gameState.coins < 25) {
        showMessage('אין מטבעות!', 'error');
        return;
    }
    if (!hasInfiniteCoins()) gameState.coins -= 25;
    for (let bot of battleState.players) {
        bot.score = Math.floor(bot.score * 0.5);
    }
    updateHomeUI();
    updateBattleUI();
    showMessage('הבוטים מבולבלים!', 'success');
}

function useBattleHint() {
    if (!hasInfiniteCoins() && gameState.coins < 20) {
        showMessage('אין מספיק מטבעות! (רמז עולה 20)', 'error');
        return;
    }

    let indices = findWordOnBoard();
    if (indices.length === 0) {
        autoShuffleIfExhausted();
        indices = findWordOnBoard();
        if (indices.length === 0) return;
    }

    const word = indices.map(i => currentGame.board[i]).join('');
    const points = HEBREW_DICTIONARY[word];

    if (!hasInfiniteCoins()) gameState.coins -= 20;
    currentGame.foundWords.add(word);
    currentGame.playerScore += points;
    document.getElementById('playerBattleScore').textContent = currentGame.playerScore;
    updateBattleUI();
    saveGameState();
    updateHomeUI();

    const tiles = document.querySelectorAll(`#${activeBoardId()} .letter-tile`);
    indices.forEach(i => tiles[i]?.classList.add('selected'));
    setTimeout(() => tiles.forEach(t => t.classList.remove('selected')), 1500);

    showMessage(`${word} - כל הכבוד! +${points}`, 'success');
    launchSparkles();
}

// Battle Royale
function startBattleRoyale() {
    currentGame.mode = 'battle';
    battleState.currentRound = 1;
    battleState.totalCoinsEarned = 0;
    const botAvatars = AVATARS.filter(a => a.id !== gameState.avatarId)
        .sort(() => Math.random() - 0.5);
    battleState.players = BOT_NAMES.map((name, i) => ({
        name,
        score: 0,
        eliminated: false,
        avatarId: botAvatars[i % botAvatars.length].id
    }));
    startBattleRound();
}

function startBattleRound() {
    currentGame.board = generateBoard();
    currentGame.foundWords.clear();
    currentGame.playerScore = 0;
    currentGame.timeLeft = 60;
    currentGame.freezeLeft = 0;
    currentGame.gameActive = true;
    battleState.botsFrozenSeconds = 0;

    showScreen('battleScreen');
    document.getElementById('roundBadge').textContent = `סיבוב ${battleState.currentRound}/5`;
    // ensure the "shuffle opponents" power-up is visible in bots mode
    // (multiplayer mode hides it since it doesn't apply to real players)
    const shuffleBtn = document.getElementById('battleShuffleBtn');
    if (shuffleBtn) shuffleBtn.style.display = '';
    renderBoard('battleBoard');
    updateBattleUI();
    startBotAI();
    startTimer('battle');
}

function updateBattleUI() {
    const statusEl = document.getElementById('playersStatus');
    statusEl.innerHTML = '';

    statusEl.innerHTML += `<div class="player-status self">
        <div class="status-avatar">${getAvatarById(gameState.avatarId).svg}</div>
        <span>אתה</span><span>${currentGame.playerScore}</span>
    </div>`;

    for (let bot of battleState.players) {
        if (!bot.eliminated) {
            statusEl.innerHTML += `<div class="player-status">
                <div class="status-avatar">${getAvatarById(bot.avatarId).svg}</div>
                <span>${bot.name}</span><span>${bot.score}</span>
            </div>`;
        }
    }
}

function startBotAI() {
    const interval = setInterval(() => {
        if (!currentGame.gameActive) {
            clearInterval(interval);
            return;
        }

        if (battleState.botsFrozenSeconds > 0) {
            battleState.botsFrozenSeconds = Math.max(0, battleState.botsFrozenSeconds - 2);
            return;
        }

        for (let bot of battleState.players) {
            if (!bot.eliminated && Math.random() > 0.5) {
                bot.score += Math.random() > 0.6 ? 100 : (Math.random() > 0.4 ? 250 : 500);
            }
        }

        updateBattleUI();
    }, 2000);
}

function endBattleRound() {
    const standings = [
        { name: gameState.playerName, score: currentGame.playerScore },
        ...battleState.players.map(b => ({ name: b.name, score: b.score }))
    ].sort((a, b) => a.score - b.score);

    const loser = standings[0].name;

    if (loser === gameState.playerName) {
        // Player eliminated
        document.getElementById('victoryTitle').innerHTML = `${icon('close')} הודחת! ${icon('close')}`;
        document.getElementById('victorySubtitle').textContent = `הודחת בסיבוב ${battleState.currentRound} מתוך ${battleState.totalRounds}`;
        showScreen('victoryScreen');
        document.getElementById('victoryRewards').innerHTML = `
            <div class="reward-box">
                <span class="coin-icon icon">${ICONS.coin}</span>
                <span>סה"כ: ${battleState.totalCoinsEarned} מטבעות</span>
            </div>
        `;
    } else {
        // Bot eliminated
        for (let bot of battleState.players) {
            if (bot.name === loser) bot.eliminated = true;
        }

        gameState.coins += 25;
        battleState.totalCoinsEarned += 25;
        updateHomeUI();

        if (battleState.currentRound >= battleState.totalRounds) {
            // Victory!
            gameState.coins += 100;
            battleState.totalCoinsEarned += 100;
            saveGameState();
            document.getElementById('victoryTitle').innerHTML = `${icon('trophy')} ניצחת! ${icon('trophy')}`;
            document.getElementById('victorySubtitle').textContent = `שרדת את כל ${battleState.totalRounds} הסיבובים!`;
            showScreen('victoryScreen');
            document.getElementById('victoryRewards').innerHTML = `
                <div class="reward-box">
                    <span class="coin-icon icon">${ICONS.coin}</span>
                    <span>סה"כ: ${battleState.totalCoinsEarned} מטבעות!</span>
                </div>
            `;
            launchConfetti();
        } else {
            // Next round
            showRoundEnd(standings, loser);
        }
    }
}

function showRoundEnd(standings, eliminatedName) {
    const standingsHTML = standings.map((s, i) => `
        <div class="standing${s.name === eliminatedName ? ' eliminated' : ''}">
            <span>#${i + 1}</span>
            <span>${s.name}${s.name === eliminatedName ? ' ' + icon('close') : ''}</span>
            <span>${s.score}</span>
        </div>
    `).join('');

    document.getElementById('eliminationNotice').textContent = `${eliminatedName} הודח/ה מהסיבוב!`;
    document.getElementById('standingsDisplay').innerHTML = standingsHTML;
    showScreen('roundEndScreen');
}

function nextBattleRound() {
    battleState.currentRound++;
    startBattleRound();
}

// The round-end "next round" button is shared between bots-battle and
// multiplayer. Route to the right handler based on the current mode.
function handleNextRoundClick() {
    if (currentGame.mode === 'multiplayer' && typeof hostNextMultiplayerRound === 'function') {
        hostNextMultiplayerRound();
    } else {
        nextBattleRound();
    }
}

// Shop - price list of the in-game power-ups (they are paid with coins
// at the moment of use, during the game)
function renderShop() {
    const shopEl = document.getElementById('shopItems');
    shopEl.innerHTML = `<p class="shop-note">העזרים נקנים במטבעות תוך כדי משחק — פשוט לחץ עליהם במסך המשחק</p>`;

    SHOP_ITEMS.forEach(item => {
        shopEl.innerHTML += `
            <div class="shop-item">
                <div class="item-info">
                    <h3>${icon(item.icon)} ${item.name}</h3>
                    <p>${item.desc}</p>
                </div>
                <span class="shop-item-price">${icon('coin', 'coin-icon')} ${item.cost}</span>
            </div>
        `;
    });
}

// Profile
function renderProfile() {
    document.getElementById('profileStats').innerHTML = `
        <p><strong>שם:</strong> ${gameState.playerName} <button class="rename-btn" onclick="renamePlayer()" title="ערוך שם">${icon('pencil')}</button></p>
        <p><strong>רמה:</strong> ${gameState.level}</p>
        <p><strong>מטבעות:</strong> ${coinsText()}</p>
        <p><strong>ניקוד כולל:</strong> ${gameState.totalScore}</p>
        <p><strong>משחקים:</strong> ${gameState.gamesPlayed}</p>
    `;
    renderAvatarPicker();
    renderSubmissions();
}

function renamePlayer() {
    const name = prompt('הכנס שם חדש:', gameState.playerName);
    if (name && name.trim()) {
        gameState.playerName = name.trim().slice(0, 20);
        saveGameState();
        updateHomeUI();
        renderProfile();
        showMessage('השם עודכן!', 'success');
    }
}

// ===== Word review panel (creator decides what enters the dictionary) =====
function renderSubmissions() {
    const el = document.getElementById('submissionsList');
    if (!el) return;
    const subs = JSON.parse(localStorage.getItem('zabangSubmissions') || '[]');

    if (subs.length === 0) {
        el.innerHTML = '<p class="no-subs">אין מילים ממתינות לבדיקה</p>';
        return;
    }

    el.innerHTML = '';
    subs.forEach(s => {
        const row = document.createElement('div');
        row.className = 'submission-row';
        row.innerHTML = `
            <span class="sub-word">${s.word}</span>
            <span class="sub-actions">
                <button class="approve-btn">${icon('check')} הוסף למאגר</button>
                <button class="reject-btn">${icon('close')} דחה</button>
            </span>`;
        row.querySelector('.approve-btn').onclick = () => reviewSubmission(s.word, true);
        row.querySelector('.reject-btn').onclick = () => reviewSubmission(s.word, false);
        el.appendChild(row);
    });
}

function reviewSubmission(word, approve) {
    let subs = JSON.parse(localStorage.getItem('zabangSubmissions') || '[]');
    subs = subs.filter(s => s.word !== word);
    localStorage.setItem('zabangSubmissions', JSON.stringify(subs));

    if (approve) {
        const custom = JSON.parse(localStorage.getItem('zabangCustomWords') || '[]');
        if (!custom.includes(word)) custom.push(word);
        localStorage.setItem('zabangCustomWords', JSON.stringify(custom));
        HEBREW_DICTIONARY[word] = pointsForWord(word);
        showMessage(`"${word}" נוספה למאגר!`, 'success');
    } else {
        showMessage(`המילה "${word}" נדחתה`, 'warning');
    }
    renderSubmissions();
}

function renderAvatarPicker() {
    document.getElementById('currentAvatar').innerHTML = getAvatarById(gameState.avatarId).svg;

    const grid = document.getElementById('avatarGrid');
    grid.innerHTML = '';

    AVATARS.forEach(avatar => {
        const option = document.createElement('div');
        option.className = 'avatar-option' + (avatar.id === gameState.avatarId ? ' avatar-selected' : '');
        option.innerHTML = `${avatar.svg}<span class="avatar-name">${avatar.name}</span>`;
        option.onclick = () => selectAvatar(avatar.id);
        grid.appendChild(option);
    });
}

function selectAvatar(id) {
    gameState.avatarId = id;
    saveGameState();
    renderAvatarPicker();
    updateHomeUI();
    showMessage(`הדמות הוחלפה ל${getAvatarById(id).name}!`, 'success');
}
