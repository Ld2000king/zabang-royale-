// ===== UI icons (SVG) =====
// Self-contained inline SVG icons replacing emoji, chunky/rounded arcade style.
// Most use currentColor so they inherit color from their CSS context.

const ICONS = {
    play: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 4 L20 12 L6 20 Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`,

    shopBag: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 9 L5 21 H19 L17 9 Z"/><path d="M9 9 V6.5 a3 3 0 0 1 6 0 V9"/></svg>`,

    profile: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21 c0 -4.5 3.5 -7 8 -7 s8 2.5 8 7 Z"/></svg>`,

    coin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="#ffd60a" stroke="#ffb700" stroke-width="2"/><circle cx="12" cy="12" r="5.5" fill="none" stroke="#ffb700" stroke-width="1.5"/></svg>`,

    home: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11 L12 4 L20 11"/><path d="M6 10 V20 H18 V10"/></svg>`,

    hint: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18 H15"/><path d="M12 3 a6 6 0 0 1 3.5 10.9 c-0.8 0.6 -1.2 1.4 -1.2 2.1 H9.7 c0 -0.7 -0.4 -1.5 -1.2 -2.1 A6 6 0 0 1 12 3 Z"/></svg>`,

    shuffle: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6 H7 L17 18 H21"/><path d="M17 6 H21 V10"/><path d="M3 18 H7 L10.5 13.8"/><path d="M17 18 H21 V14"/></svg>`,

    freeze: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2 V22 M4.5 6 L19.5 18 M19.5 6 L4.5 18"/></svg>`,

    freezeOpponents: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2 V22 M4.5 6 L19.5 18 M19.5 6 L4.5 18"/><circle cx="12" cy="12" r="10" stroke-dasharray="2 3"/></svg>`,

    tornado: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 5 H21"/><path d="M5 10 H19"/><path d="M8 15 H16"/><path d="M10 20 H14"/></svg>`,

    timer: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9 V13 L15 15"/><path d="M9 2 H15"/></svg>`,

    replay: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 a8 8 0 1 1 2.6 5.9"/><path d="M4 18 V13 H9"/></svg>`,

    trophy: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4 H17 V9 a5 5 0 0 1 -10 0 Z"/><path d="M7 5 H3 v2 a4 4 0 0 0 4 4"/><path d="M17 5 H21 v2 a4 4 0 0 1 -4 4"/><path d="M12 14 V18"/><path d="M8 21 H16"/><path d="M9 18 H15 L16 21 H8 Z"/></svg>`,

    submit: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15 V3"/><path d="M7 8 L12 3 L17 8"/><path d="M4 15 V19 H20 V15"/></svg>`,

    check: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5 L9.5 18 L20 6"/></svg>`,

    close: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6 L18 18 M18 6 L6 18"/></svg>`,

    pencil: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 L4.7 16.4 L15.5 5.6 a2 2 0 0 1 2.8 0 L19.4 6.7 a2 2 0 0 1 0 2.8 L8.6 20.3 Z"/><path d="M14 7 L17.5 10.5"/></svg>`,

    help: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.2 9.5 a2.8 2.8 0 1 1 4.3 2.4 c-0.9 0.6 -1.5 1.1 -1.5 2.1"/><circle cx="12" cy="17" r="0.1" fill="currentColor" stroke-width="2.5"/></svg>`,

    sword: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18 L18 6"/><path d="M7.8 11.8 L12.2 16.2"/><circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none"/></svg>`,
};

function icon(name, extraClass) {
    const svg = ICONS[name] || '';
    return `<span class="icon${extraClass ? ' ' + extraClass : ''}">${svg}</span>`;
}
