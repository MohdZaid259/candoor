// Stock imagery served from the candoor-assets GitHub repo via jsDelivr.
// Real project/portfolio photos stay in /public/work.
const ASSET_BASE = 'https://cdn.jsdelivr.net/gh/MohdZaid259/candoor-assets@main';

// Cache buster - Use timestamp-based version for always-fresh images
// This forces CDN to serve latest version every time
// Format: YYYYMMDDHHMM (e.g., 202501151430 for Jan 15, 2025 at 2:30 PM)
// Update this number whenever images are changed in the repo
const CACHE_BUSTER = '202407151000';

export const asset = (path: string) => `${ASSET_BASE}/${path}?t=${CACHE_BUSTER}`;
