const cacheName = 'cache-v8';

// Files to cache
const cacheFiles = [
  '/',
  'index.html',
  'style.css',
  'app.js',
  "logo192.png",
  "logo512.png",

];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Cache opened');
      return cache.addAll(cacheFiles);
    })
  );
});

// Fetch Event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        console.log('Found in cache: ', event.request.url);
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseClone = response.clone();
        caches.open(cacheName).then(cache => {
          cache.put(event.request, responseClone);
        });
        return response;
      });
    })
  );
});

self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return cacheName.startsWith('cache-') && cacheName !== cacheName;
            })
            .map(cacheName => {
              return caches.delete(cacheName);
            })
        );
      })
    );
  });