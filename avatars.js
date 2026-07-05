// ===== Avatar characters (SVG) =====
// Each avatar is a self-contained SVG string - no external images needed

function faceSvg({ bg, skin, hair, hairStyle, extra = '' }) {
    let hairShape = '';
    if (hairStyle === 'short') {
        hairShape = `<path d="M25 42 Q30 18 50 18 Q70 18 75 42 L75 36 Q70 12 50 12 Q30 12 25 36 Z" fill="${hair}"/>
                     <path d="M25 42 Q30 20 50 20 Q70 20 75 42 Q72 30 50 26 Q28 30 25 42" fill="${hair}"/>`;
    } else if (hairStyle === 'long') {
        hairShape = `<path d="M22 40 Q25 12 50 12 Q75 12 78 40 L78 68 Q74 74 70 68 L70 45 Q60 30 50 30 Q40 30 30 45 L30 68 Q26 74 22 68 Z" fill="${hair}"/>`;
    } else if (hairStyle === 'spiky') {
        hairShape = `<path d="M26 40 L22 22 L34 30 L34 14 L44 26 L50 10 L56 26 L66 14 L66 30 L78 22 L74 40 Q62 26 50 26 Q38 26 26 40" fill="${hair}"/>`;
    } else if (hairStyle === 'curly') {
        hairShape = `<circle cx="32" cy="30" r="10" fill="${hair}"/><circle cx="44" cy="22" r="10" fill="${hair}"/>
                     <circle cx="58" cy="22" r="10" fill="${hair}"/><circle cx="69" cy="30" r="10" fill="${hair}"/>
                     <circle cx="50" cy="26" r="11" fill="${hair}"/>`;
    } else if (hairStyle === 'bun') {
        hairShape = `<circle cx="50" cy="14" r="9" fill="${hair}"/>
                     <path d="M25 42 Q28 16 50 16 Q72 16 75 42 Q68 28 50 28 Q32 28 25 42" fill="${hair}"/>`;
    } else if (hairStyle === 'bald') {
        hairShape = '';
    }

    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="${bg}"/>
        <circle cx="50" cy="46" r="26" fill="${skin}"/>
        <circle cx="41" cy="43" r="3.2" fill="#222"/>
        <circle cx="59" cy="43" r="3.2" fill="#222"/>
        <circle cx="42.2" cy="42" r="1" fill="#fff"/>
        <circle cx="60.2" cy="42" r="1" fill="#fff"/>
        <path d="M42 55 Q50 62 58 55" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        ${hairShape}
        ${extra}
        <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="${hair === 'none' ? '#555' : hair}" opacity="0.9"/>
    </svg>`;
}

const AVATARS = [
    {
        id: 'dan',
        name: 'דן',
        svg: faceSvg({ bg: '#4fc3f7', skin: '#ffcc99', hair: '#5d4037', hairStyle: 'short' })
    },
    {
        id: 'maya',
        name: 'מאיה',
        svg: faceSvg({ bg: '#f48fb1', skin: '#ffe0bd', hair: '#3e2723', hairStyle: 'long' })
    },
    {
        id: 'tom',
        name: 'תום',
        svg: faceSvg({ bg: '#ffb74d', skin: '#f1c27d', hair: '#212121', hairStyle: 'spiky' })
    },
    {
        id: 'noa',
        name: 'נועה',
        svg: faceSvg({ bg: '#ba68c8', skin: '#ffdbac', hair: '#8d6e63', hairStyle: 'bun' })
    },
    {
        id: 'ari',
        name: 'ארי',
        svg: faceSvg({ bg: '#81c784', skin: '#e0ac69', hair: '#111', hairStyle: 'curly' })
    },
    {
        id: 'shira',
        name: 'שירה',
        svg: faceSvg({ bg: '#ff8a65', skin: '#ffe0bd', hair: '#d84315', hairStyle: 'long' })
    },
    {
        id: 'cool',
        name: 'קול',
        svg: faceSvg({
            bg: '#455a64', skin: '#ffcc99', hair: '#111', hairStyle: 'short',
            extra: `<rect x="33" y="38" width="14" height="9" rx="3" fill="#111"/>
                    <rect x="53" y="38" width="14" height="9" rx="3" fill="#111"/>
                    <rect x="47" y="41" width="6" height="2.5" fill="#111"/>`
        })
    },
    {
        id: 'grandpa',
        name: 'סבא',
        svg: faceSvg({
            bg: '#90a4ae', skin: '#ffd9b3', hair: '#e0e0e0', hairStyle: 'bald',
            extra: `<path d="M30 36 Q35 32 42 35" stroke="#e0e0e0" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <path d="M58 35 Q65 32 70 36" stroke="#e0e0e0" stroke-width="3" fill="none" stroke-linecap="round"/>
                    <path d="M40 60 Q50 70 60 60 Q58 68 50 68 Q42 68 40 60" fill="#e0e0e0"/>`
        })
    },
    {
        id: 'ninja',
        name: 'נינג׳ה',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#263238"/>
            <circle cx="50" cy="46" r="26" fill="#37474f"/>
            <rect x="26" y="37" width="48" height="14" rx="7" fill="#ffcc99"/>
            <circle cx="41" cy="44" r="3.2" fill="#111"/>
            <circle cx="59" cy="44" r="3.2" fill="#111"/>
            <path d="M74 40 L88 30 L84 44 Z" fill="#e53935"/>
            <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="#37474f"/>
        </svg>`
    },
    {
        id: 'robot',
        name: 'רובוט',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#00bcd4"/>
            <rect x="28" y="26" width="44" height="40" rx="8" fill="#b0bec5"/>
            <rect x="28" y="26" width="44" height="40" rx="8" fill="none" stroke="#78909c" stroke-width="2"/>
            <circle cx="41" cy="43" r="6" fill="#fff"/>
            <circle cx="59" cy="43" r="6" fill="#fff"/>
            <circle cx="41" cy="43" r="3" fill="#00e5ff"/>
            <circle cx="59" cy="43" r="3" fill="#00e5ff"/>
            <rect x="40" y="55" width="20" height="4" rx="2" fill="#546e7a"/>
            <line x1="50" y1="26" x2="50" y2="14" stroke="#78909c" stroke-width="3"/>
            <circle cx="50" cy="12" r="4" fill="#ff5252"/>
            <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="#78909c"/>
        </svg>`
    },
    {
        id: 'cat',
        name: 'חתול',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#ffca28"/>
            <path d="M28 34 L24 14 L40 26 Z" fill="#ff9800"/>
            <path d="M72 34 L76 14 L60 26 Z" fill="#ff9800"/>
            <path d="M28 34 L26 20 L38 28 Z" fill="#ffe0b2"/>
            <path d="M72 34 L74 20 L62 28 Z" fill="#ffe0b2"/>
            <circle cx="50" cy="48" r="26" fill="#ffb74d"/>
            <circle cx="41" cy="44" r="3.5" fill="#33691e"/>
            <circle cx="59" cy="44" r="3.5" fill="#33691e"/>
            <path d="M47 53 L50 56 L53 53 Z" fill="#e65100"/>
            <path d="M50 56 Q46 61 42 59 M50 56 Q54 61 58 59" stroke="#e65100" stroke-width="2" fill="none" stroke-linecap="round"/>
            <line x1="28" y1="50" x2="40" y2="52" stroke="#795548" stroke-width="1.5"/>
            <line x1="28" y1="56" x2="40" y2="55" stroke="#795548" stroke-width="1.5"/>
            <line x1="72" y1="50" x2="60" y2="52" stroke="#795548" stroke-width="1.5"/>
            <line x1="72" y1="56" x2="60" y2="55" stroke="#795548" stroke-width="1.5"/>
            <path d="M20 100 Q20 78 50 78 Q80 78 80 100 Z" fill="#ff9800"/>
        </svg>`
    },
    {
        id: 'dog',
        name: 'חומי',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#d7ccc8"/>
            <path d="M22 38 Q10 20 24 14 Q30 30 34 40 Z" fill="#6d4c41"/>
            <path d="M78 38 Q90 20 76 14 Q70 30 66 40 Z" fill="#6d4c41"/>
            <circle cx="50" cy="50" r="27" fill="#8d5524"/>
            <ellipse cx="50" cy="60" rx="14" ry="11" fill="#c98a4b"/>
            <circle cx="41" cy="46" r="3.5" fill="#2b1a0e"/>
            <circle cx="59" cy="46" r="3.5" fill="#2b1a0e"/>
            <circle cx="42.2" cy="45" r="1" fill="#fff"/>
            <circle cx="60.2" cy="45" r="1" fill="#fff"/>
            <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#2b1a0e"/>
            <path d="M50 61 Q46 66 42 63 M50 61 Q54 66 58 63" stroke="#2b1a0e" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M20 100 Q20 78 50 78 Q80 78 80 100 Z" fill="#6d4c41"/>
        </svg>`
    },
    {
        id: 'alien',
        name: 'חייזר',
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#7c4dff"/>
            <ellipse cx="50" cy="46" rx="24" ry="28" fill="#aed581"/>
            <ellipse cx="41" cy="44" rx="6" ry="9" fill="#111"/>
            <ellipse cx="59" cy="44" rx="6" ry="9" fill="#111"/>
            <ellipse cx="43" cy="41" rx="2" ry="3" fill="#b9f6ca"/>
            <ellipse cx="61" cy="41" rx="2" ry="3" fill="#b9f6ca"/>
            <path d="M45 60 Q50 64 55 60" stroke="#33691e" stroke-width="2" fill="none" stroke-linecap="round"/>
            <line x1="50" y1="18" x2="50" y2="8" stroke="#aed581" stroke-width="3"/>
            <circle cx="50" cy="7" r="4" fill="#ffee58"/>
            <path d="M20 100 Q20 78 50 78 Q80 78 80 100 Z" fill="#9575cd"/>
        </svg>`
    },

    // ===== Premium ("cooler") avatars - bought in the shop (premium: true) =====
    {
        id: 'king',
        name: 'מלך',
        premium: true,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#1a237e"/>
            <circle cx="50" cy="53" r="25" fill="#ffcc99"/>
            <circle cx="41" cy="51" r="3.2" fill="#222"/>
            <circle cx="59" cy="51" r="3.2" fill="#222"/>
            <path d="M42 61 Q50 67 58 61" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M30 34 L34 21 L42 31 L50 16 L58 31 L66 21 L70 34 Z" fill="#ffd700" stroke="#e6a700" stroke-width="1.5" stroke-linejoin="round"/>
            <rect x="30" y="34" width="40" height="6" rx="1.5" fill="#ffd700" stroke="#e6a700" stroke-width="1"/>
            <circle cx="50" cy="24" r="2.6" fill="#ff5252"/>
            <circle cx="34" cy="25" r="2" fill="#40c4ff"/>
            <circle cx="66" cy="25" r="2" fill="#40c4ff"/>
            <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="#c62828"/>
        </svg>`
    },
    {
        id: 'cyber',
        name: 'סייבר',
        premium: true,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#0d1b2a"/>
            <rect x="26" y="28" width="48" height="44" rx="12" fill="#1b2a3a" stroke="#00e5ff" stroke-width="2"/>
            <rect x="32" y="40" width="36" height="11" rx="5.5" fill="#00e5ff" opacity="0.9"/>
            <rect x="35" y="42.5" width="9" height="6" rx="3" fill="#0d1b2a"/>
            <rect x="56" y="42.5" width="9" height="6" rx="3" fill="#0d1b2a"/>
            <path d="M37 61 H63" stroke="#00e5ff" stroke-width="2" stroke-linecap="round"/>
            <line x1="50" y1="28" x2="50" y2="17" stroke="#00e5ff" stroke-width="2"/>
            <circle cx="50" cy="15" r="3" fill="#00e5ff"/>
            <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="#1b2a3a"/>
        </svg>`
    },
    {
        id: 'flame',
        name: 'להבה',
        premium: true,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#3e0a00"/>
            <path d="M50 14 Q64 30 60 44 Q72 40 68 56 Q66 74 50 79 Q34 74 32 56 Q28 40 40 44 Q36 30 50 14" fill="#ff6d00"/>
            <path d="M50 27 Q58 38 55 48 Q62 46 58 58 Q56 68 50 71 Q44 68 42 58 Q38 46 45 48 Q42 38 50 27" fill="#ffca28"/>
            <circle cx="43" cy="52" r="3" fill="#3e0a00"/>
            <circle cx="57" cy="52" r="3" fill="#3e0a00"/>
            <path d="M44 61 Q50 65 56 61" stroke="#3e0a00" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M20 100 Q20 78 50 78 Q80 78 80 100 Z" fill="#bf360c"/>
        </svg>`
    },
    {
        id: 'hero',
        name: 'גיבור',
        premium: true,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#b71c1c"/>
            <circle cx="50" cy="51" r="26" fill="#ffcc99"/>
            <path d="M24 42 Q50 31 76 42 L74 52 Q62 56 50 56 Q38 56 26 52 Z" fill="#1a237e"/>
            <ellipse cx="41" cy="47" rx="6" ry="4.2" fill="#fff"/>
            <ellipse cx="59" cy="47" rx="6" ry="4.2" fill="#fff"/>
            <path d="M42 63 Q50 69 58 63" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M20 100 Q20 76 50 76 Q80 76 80 100 Z" fill="#1a237e"/>
        </svg>`
    },
    {
        id: 'galaxy',
        name: 'גלקסי',
        premium: true,
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#311b92"/>
            <circle cx="50" cy="48" r="34" fill="#4527a0" opacity="0.7"/>
            <circle cx="30" cy="28" r="1.5" fill="#fff"/>
            <circle cx="70" cy="26" r="1.2" fill="#fff"/>
            <circle cx="77" cy="52" r="1.5" fill="#fff"/>
            <circle cx="23" cy="55" r="1.2" fill="#fff"/>
            <circle cx="64" cy="72" r="1.3" fill="#fff"/>
            <circle cx="50" cy="49" r="24" fill="#b388ff" opacity="0.35"/>
            <circle cx="42" cy="47" r="3.6" fill="#fff"/>
            <circle cx="58" cy="47" r="3.6" fill="#fff"/>
            <circle cx="42" cy="47" r="1.6" fill="#311b92"/>
            <circle cx="58" cy="47" r="1.6" fill="#311b92"/>
            <path d="M43 58 Q50 63 57 58" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>`
    }
];

function getAvatarById(id) {
    return AVATARS.find(a => a.id === id) || AVATARS[0];
}
