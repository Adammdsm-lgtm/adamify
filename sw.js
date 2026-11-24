// Adamify service worker: keeps the app available offline and handles updates.
// Your songs live in the browser's IndexedDB on the device, not in this cache.
// TO RELEASE AN UPDATE: change VERSION here (and APP_VERSION in index.html), then re-upload.
const VERSION = '1.6.0';
const C = 'adamify-' + VERSION;
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'qrcode.js'];

self.addEventListener('install', e => {
  // Download the new version in the background; it waits until the user taps "Update now".
  e.waitUntil(caches.open(C).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))));
});
self.addEventListener('message', e => {
  if (e.data === 'skip') self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || !r.url.startsWith('http')) return;
  const u = new URL(r.url), sameOrigin = u.origin === location.origin;
  // Only the app's own files and its fonts are kept offline. Spotify and other sites always go to the network.
  if (!sameOrigin && !/^fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)) return;
  e.respondWith((async () => {
    const cache = await caches.open(C);
    const hit = await cache.match(r, { ignoreSearch: sameOrigin }) || (r.mode === 'navigate' ? await cache.match('index.html') : null);
    if (hit) return hit; // app files come from the installed version until the user updates
    try {
      const res = await fetch(r);
      if (res.ok || res.type === 'opaque') cache.put(r, res.clone());
      return res;
    } catch (err) {
      return Response.error();
    }
  })());
});
