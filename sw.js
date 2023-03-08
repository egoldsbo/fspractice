

const cacheName = 'cache-v17';
//addnewsigns
// Files to cache
const cacheFiles = [
  '/',
  'index.html',
  'style.css',
  'app.js',
  "logo192.png",
  "logo512.png",

  "mostcommonsigns/again.mp4","mostcommonsigns/also.mp4","mostcommonsigns/ask.mp4","mostcommonsigns/because.mp4","mostcommonsigns/boy.mp4", 
"mostcommonsigns/but.mp4","mostcommonsigns/can.mp4","mostcommonsigns/come.mp4","mostcommonsigns/condone.mp4","mostcommonsigns/deaf.mp4","mostcommonsigns/different.mp4", 
"mostcommonsigns/drink.mp4","mostcommonsigns/drive.mp4","mostcommonsigns/eat.mp4","mostcommonsigns/email.mp4","mostcommonsigns/family.mp4","mostcommonsigns/feel.mp4",
 "mostcommonsigns/few.mp4","mostcommonsigns/find.mp4","mostcommonsigns/fine.mp4","mostcommonsigns/fingerspell.mp4","mostcommonsigns/finish.mp4", 
 "mostcommonsigns/food.mp4","mostcommonsigns/for.mp4","mostcommonsigns/forget.mp4","mostcommonsigns/friend.mp4","mostcommonsigns/get.mp4","mostcommonsigns/girl.mp4","mostcommonsigns/give.mp4",
  "mostcommonsigns/go.mp4","mostcommonsigns/good.mp4","mostcommonsigns/have.mp4","mostcommonsigns/he.mp4","mostcommonsigns/hearing.mp4","mostcommonsigns/hello.mp4","mostcommonsigns/help.mp4", 
  "mostcommonsigns/home.mp4","mostcommonsigns/how.mp4","mostcommonsigns/Internet.mp4","mostcommonsigns/know.mp4","mostcommonsigns/later.mp4","mostcommonsigns/like.mp4",
   "mostcommonsigns/little.mp4","mostcommonsigns/live.mp4","mostcommonsigns/man.mp4","mostcommonsigns/many.mp4","mostcommonsigns/me.mp4","mostcommonsigns/meet.mp4","mostcommonsigns/more.mp4", 
   "mostcommonsigns/my.mp4","mostcommonsigns/name.mp4","mostcommonsigns/need.mp4","mostcommonsigns/new.mp4","mostcommonsigns/no.mp4","mostcommonsigns/not.mp4","mostcommonsigns/now.mp4", 
   "mostcommonsigns/ok.mp4","mostcommonsigns/old.mp4","mostcommonsigns/other.mp4","mostcommonsigns/please.mp4","mostcommonsigns/remember.mp4","mostcommonsigns/same.mp4", 
   "mostcommonsigns/say.mp4","mostcommonsigns/school.mp4","mostcommonsigns/see.mp4","mostcommonsigns/she.mp4","mostcommonsigns/should.mp4","mostcommonsigns/sign.mp4",
    "mostcommonsigns/slow.mp4","mostcommonsigns/some.mp4","mostcommonsigns/sorry.mp4","mostcommonsigns/store.mp4","mostcommonsigns/take.mp4","mostcommonsigns/tell.mp4",
     "mostcommonsigns/text.mp4","mostcommonsigns/thanks.mp4","mostcommonsigns/their.mp4","mostcommonsigns/they.mp4","mostcommonsigns/think.mp4","mostcommonsigns/time.mp4", 
     "mostcommonsigns/tired.mp4","mostcommonsigns/try.mp4","mostcommonsigns/understand.mp4","mostcommonsigns/use.mp4","mostcommonsigns/wait.mp4","mostcommonsigns/want.mp4", 
     "mostcommonsigns/what.mp4","mostcommonsigns/when.mp4","mostcommonsigns/where.mp4","mostcommonsigns/which.mp4","mostcommonsigns/who.mp4","mostcommonsigns/why.mp4", 
     "mostcommonsigns/will.mp4","mostcommonsigns/with.mp4","mostcommonsigns/woman.mp4","mostcommonsigns/work.mp4","mostcommonsigns/write.mp4","mostcommonsigns/yes.mp4",
     "mostcommonsigns/you.mp4", "mostcommonsigns/your.mp4"

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