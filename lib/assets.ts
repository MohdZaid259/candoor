// Stock imagery served from the candoor-assets GitHub repo via jsDelivr.
// Real project/portfolio photos stay in /public/work.
const ASSET_BASE = 'https://cdn.jsdelivr.net/gh/MohdZaid259/candoor-assets@main';

export const asset = (path: string) => `${ASSET_BASE}/${path}`;
