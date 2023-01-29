self.addEventListener("install", e => {
    console.log("installing service worker");
    e.waitUntil(
    caches.open("static").then(cache => {
    return cache.addAll([
    //addbookhere
    "/",
    "./style.css",
    "./app.js",
    "./index.html",
    "./manifest.json",
    "./sw.js",
    "./logo192.png",
    ]);
    }).then(() => {
    self.skipWaiting();
    })
    );
    });
    
    self.addEventListener("activate", e => {
        e.waitUntil(
            caches.keys().then(keys => {
                return Promise.all(keys.map(key => caches.delete(key)));
            })
            .then(() => {
                return caches.open("static").then(cache => {
                    return cache.addAll([
                        // add files to be cached here
                    ]);
                });
            })
            .then(() => {
                self.clients.claim();
            })
        );
    });
    
    self.addEventListener("fetch", e => {
    console.log("fetching service worker");
    e.respondWith(
    caches.match(e.request).then(response => {
    return response || fetch(e.request);
    })
    );
    });