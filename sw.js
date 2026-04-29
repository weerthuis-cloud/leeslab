// Leeslab service worker
// Caching-strategie:
//  - Static shell (HTML, iconen): cache-first
//  - Supabase API en storage: laat de browser het doen (network)
const CACHE_NAME = 'leeslab-v0.4.12';
const SHELL = [
  './',
  './docent_mobiel_v0.4.12.html',
  './leeslab_icon_180.png',
  './leeslab_icon_192.png',
  './leeslab_icon_512.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(SHELL).catch((err) => console.warn('Pre-cache mislukt:', err))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Supabase calls: laat de browser direct doen
  if (url.hostname.includes('supabase.co') ||
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('openlibrary.org') ||
      url.hostname.includes('weserv.nl') ||
      url.hostname.includes('jsdelivr.net')) {
    return;
  }
  // Static shell: cache-first
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
