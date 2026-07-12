// ===== Avatar characters (DiceBear) =====
// Avatars are served by DiceBear's free, open-source avatar API
// (https://www.dicebear.com). Each avatar is an <img> pointing at the
// "adventurer" style, seeded by the avatar's stable id so every character is
// unique and deterministic (same id -> same face, every time, every device).
//
// NOTE: these load over the network from api.dicebear.com, so avatars need an
// internet connection to render. If the app is used offline (PWA), the ring
// falls back to its solid background color. To make them fully offline-proof,
// self-host DiceBear or pre-cache the URLs in sw.js.

// A pleasant spread of soft gradient backgrounds; DiceBear picks one per seed
// so the set looks varied but cohesive inside the avatar ring.
const DICEBEAR_BGS = 'b6e3f4,c0aede,d1d4f9,ffd5dc,ffdfbf,c8f7c5,fdf4b3';

function diceBearAvatar(seed, name = '') {
    const url = 'https://api.dicebear.com/9.x/adventurer/svg'
        + '?seed=' + encodeURIComponent(seed)
        + '&backgroundType=gradientLinear'
        + '&backgroundColor=' + DICEBEAR_BGS
        + '&radius=50';
    return `<img class="avatar-img" src="${url}" alt="${name}" `
        + `width="100" height="100" referrerpolicy="no-referrer">`;
}

const AVATARS = [
    { id: 'dan',     name: 'דן' },
    { id: 'maya',    name: 'מאיה' },
    { id: 'tom',     name: 'תום' },
    { id: 'noa',     name: 'נועה' },
    { id: 'ari',     name: 'ארי' },
    { id: 'shira',   name: 'שירה' },
    { id: 'cool',    name: 'קול' },
    { id: 'grandpa', name: 'סבא' },
    { id: 'ninja',   name: 'נינג׳ה' },
    { id: 'robot',   name: 'רובוט' },
    { id: 'cat',     name: 'חתול' },
    { id: 'dog',     name: 'חומי' },
    { id: 'alien',   name: 'חייזר' },

    // ===== Premium ("cooler") avatars - bought in the shop (premium: true) =====
    { id: 'king',    name: 'מלך',   premium: true },
    { id: 'cyber',   name: 'סייבר', premium: true },
    { id: 'flame',   name: 'להבה',  premium: true },
    { id: 'hero',    name: 'גיבור', premium: true },
    { id: 'galaxy',  name: 'גלקסי', premium: true }
].map(a => ({ ...a, svg: diceBearAvatar(a.id, a.name) }));

function getAvatarById(id) {
    return AVATARS.find(a => a.id === id) || AVATARS[0];
}
