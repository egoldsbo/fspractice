

const cacheName = 'cache-v40';
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
     "mostcommonsigns/you.mp4", "mostcommonsigns/your.mp4",

'mostcommonsigns2/accept.mp4',  'mostcommonsigns2/afternoon.mp4',  'mostcommonsigns2/agree.mp4',
'mostcommonsigns2/allow.mp4',  'mostcommonsigns2/almost.mp4',  'mostcommonsigns2/alone.mp4',  
'mostcommonsigns2/always.mp4',  'mostcommonsigns2/and.mp4',  'mostcommonsigns2/angry.mp4',  
'mostcommonsigns2/animal.mp4',  'mostcommonsigns2/anything.mp4',  'mostcommonsigns2/argue.mp4', 
 'mostcommonsigns2/ASL.mp4',  'mostcommonsigns2/attitude.mp4',  'mostcommonsigns2/autumn.mp4', 
  'mostcommonsigns2/average.mp4',  'mostcommonsigns2/avoid.mp4',  'mostcommonsigns2/away.mp4', 
   'mostcommonsigns2/basic.mp4',  'mostcommonsigns2/believe.mp4',  'mostcommonsigns2/best.mp4', 
    'mostcommonsigns2/book.mp4',  'mostcommonsigns2/both.mp4',  'mostcommonsigns2/brother.mp4', 
     'mostcommonsigns2/calm.mp4',  'mostcommonsigns2/car.mp4',  'mostcommonsigns2/class.mp4', 
     
     'mostcommonsigns2/close.mp4',  'mostcommonsigns2/comfortable.mp4', 
      'mostcommonsigns2/deep.mp4',  'mostcommonsigns2/doubt.mp4', 
      
      'mostcommonsigns2/English.mp4',  'mostcommonsigns2/everyday.mp4', 
       'mostcommonsigns2/everything.mp4',  'mostcommonsigns2/example.mp4', 
        'mostcommonsigns2/father.mp4',  'mostcommonsigns2/funny.mp4',  
        'mostcommonsigns2/game.mp4',  'mostcommonsigns2/gift.mp4',  
        
        'mostcommonsigns2/grow.mp4',  'mostcommonsigns2/guess.mp4', 
         'mostcommonsigns2/happen.mp4',  'mostcommonsigns2/hear.mp4',  'mostcommonsigns2/hold.mp4',  
         'mostcommonsigns2/house.mp4',  'mostcommonsigns2/idea.mp4',  'mostcommonsigns2/if.mp4', 
          'mostcommonsigns2/important.mp4',  'mostcommonsigns2/include.mp4',  'mostcommonsigns2/joke.mp4', 
           'mostcommonsigns2/letter.mp4',  'mostcommonsigns2/life.mp4',  'mostcommonsigns2/looklike.mp4',  
           'mostcommonsigns2/lose.mp4',  'mostcommonsigns2/love.mp4',  'mostcommonsigns2/money.mp4', 
            'mostcommonsigns2/mother.mp4',  'mostcommonsigns2/move.mp4',  'mostcommonsigns2/movie.mp4', 
             'mostcommonsigns2/normal.mp4',  'mostcommonsigns2/number.mp4',  'mostcommonsigns2/offspring.mp4',  
             'mostcommonsigns2/outside.mp4',  'mostcommonsigns2/overlook.mp4',  'mostcommonsigns2/paper.mp4',
               'mostcommonsigns2/party.mp4',  'mostcommonsigns2/pay.mp4',  'mostcommonsigns2/pen.mp4',  'mostcommonsigns2/picture.mp4',  
               'mostcommonsigns2/play.mp4',  'mostcommonsigns2/problem.mp4',  'mostcommonsigns2/room.mp4',  'mostcommonsigns2/safe.mp4',  
               'mostcommonsigns2/sell.mp4',  'mostcommonsigns2/service.mp4',  'mostcommonsigns2/share.mp4',  'mostcommonsigns2/sick.mp4',  
               'mostcommonsigns2/since.mp4',  'mostcommonsigns2/sister.mp4',  'mostcommonsigns2/smart.mp4',  'mostcommonsigns2/soon.mp4', 
                'mostcommonsigns2/spring.mp4',  'mostcommonsigns2/story.mp4',  'mostcommonsigns2/struggle.mp4',  'mostcommonsigns2/study.mp4', 
                 'mostcommonsigns2/summer.mp4',  'mostcommonsigns2/sure.mp4',  'mostcommonsigns2/that.mp4',  'mostcommonsigns2/travel.mp4', 
                  'mostcommonsigns2/wash.mp4',  'mostcommonsigns2/water.mp4',  'mostcommonsigns2/week.mp4',  'mostcommonsigns2/weekend.mp4', 
                   'mostcommonsigns2/winter.mp4',  'mostcommonsigns2/wish.mp4',  'mostcommonsigns2/word.mp4',  'mostcommonsigns2/worse.mp4', 
                    'mostcommonsigns2/notyet.mp4',  'mostcommonsigns2/young.mp4',  'mostcommonsigns2/yourself.mp4'


,'mostcommonsigns3/about.mp4',  'mostcommonsigns3/after.mp4',  'mostcommonsigns3/against.mp4',  'mostcommonsigns3/answer.mp4', 
 'mostcommonsigns3/any.mp4',  'mostcommonsigns3/arrive.mp4',  'mostcommonsigns3/beautiful.mp4',  'mostcommonsigns3/because.mp4',  
 'mostcommonsigns3/before.mp4',  'mostcommonsigns3/better.mp4',  'mostcommonsigns3/big.mp4',  'mostcommonsigns3/bring.mp4',  
 'mostcommonsigns3/busy.mp4',  'mostcommonsigns3/buy.mp4',  'mostcommonsigns3/change.mp4',  'mostcommonsigns3/cleanup.mp4',
  'mostcommonsigns3/close.mp4',  'mostcommonsigns3/cold.mp4',  'mostcommonsigns3/color.mp4',  'mostcommonsigns3/day.mp4', 
   'mostcommonsigns3/early.mp4',  'mostcommonsigns3/easy.mp4',  'mostcommonsigns3/enough.mp4',  'mostcommonsigns3/every.mp4', 
    'mostcommonsigns3/false.mp4',  'mostcommonsigns3/far.mp4',  'mostcommonsigns3/fast.mp4',  'mostcommonsigns3/follow.mp4', 
     'mostcommonsigns3/from.mp4',  'mostcommonsigns3/gone.mp4',  'mostcommonsigns3/happy.mp4',  'mostcommonsigns3/hard.mp4', 
      'mostcommonsigns3/here.mp4',  'mostcommonsigns3/hot.mp4',  'mostcommonsigns3/hurt.mp4',  'mostcommonsigns3/improve.mp4', 
       'mostcommonsigns3/in.mp4',  'mostcommonsigns3/inform.mp4',  'mostcommonsigns3/interpreter.mp4',  'mostcommonsigns3/keep.mp4',  
       'mostcommonsigns3/last.mp4',  'mostcommonsigns3/late.mp4',  'mostcommonsigns3/learn.mp4',  'mostcommonsigns3/leave.mp4', 
        'mostcommonsigns3/search.mp4',  'mostcommonsigns3/lot.mp4',  'mostcommonsigns3/make.mp4',  'mostcommonsigns3/meaning.mp4', 
         'mostcommonsigns3/minute.mp4',  'mostcommonsigns3/month.mp4',  'mostcommonsigns3/morning.mp4',  'mostcommonsigns3/most.mp4',
           'mostcommonsigns3/must.mp4',  'mostcommonsigns3/near.mp4',  'mostcommonsigns3/never.mp4',  'mostcommonsigns3/next.mp4', 
            'mostcommonsigns3/night.mp4',  'mostcommonsigns3/nothing.mp4',  'mostcommonsigns3/only.mp4',  'mostcommonsigns3/open.mp4', 
             'mostcommonsigns3/opposite.mp4',  'mostcommonsigns3/out.mp4',  'mostcommonsigns3/people.mp4',  'mostcommonsigns3/plan.mp4', 
              'mostcommonsigns3/practice.mp4',  'mostcommonsigns3/prefer.mp4',  'mostcommonsigns3/question.mp4',  'mostcommonsigns3/read.mp4', 
               'mostcommonsigns3/ready.mp4',  'mostcommonsigns3/rest.mp4',  'mostcommonsigns3/right.mp4',  'mostcommonsigns3/run.mp4', 
                'mostcommonsigns3/sad.mp4',  'mostcommonsigns3/send.mp4',  'mostcommonsigns3/show.mp4',  'mostcommonsigns3/sit.mp4', 
                 'mostcommonsigns3/sleep.mp4',  'mostcommonsigns3/small.mp4',  'mostcommonsigns3/something.mp4',  'mostcommonsigns3/sometimes.mp4',  
                 'mostcommonsigns3/start.mp4',  'mostcommonsigns3/stay.mp4',  'mostcommonsigns3/still.mp4',  'mostcommonsigns3/stop.mp4',  
                 'mostcommonsigns3/support.mp4',  'mostcommonsigns3/talk.mp4',  'mostcommonsigns3/teach.mp4',  'mostcommonsigns3/than.mp4', 
                  'mostcommonsigns3/thing.mp4',  'mostcommonsigns3/today.mp4',  'mostcommonsigns3/toilet.mp4',  'mostcommonsigns3/tomorrow.mp4', 
                   'mostcommonsigns3/true.mp4',  'mostcommonsigns3/until.mp4',  'mostcommonsigns3/visit.mp4',  'mostcommonsigns3/walk.mp4', 
                    'mostcommonsigns3/warm.mp4',  'mostcommonsigns3/watch.mp4',  'mostcommonsigns3/wrong.mp4',  'mostcommonsigns3/yesterday.mp4' 


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