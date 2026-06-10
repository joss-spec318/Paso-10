const CACHE_NAME = "paso10-v2";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json"
];

// Instalar el Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Usar caché para funcionar Offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
