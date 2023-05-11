

const cacheName = 'cache-v36';
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
/*
,'byron/01.mp4','byron/02.mp4','byron/03.mp4','byron/04.mp4','byron5.mp4','byron/06.mp4','byron/07.mp4','byron/08.mp4','byron/09.mp4','byron/10.mp4','byron/11.mp4','byron/12.mp4','byron/13.mp4','byron/14.mp4',
'byron/15.mp4','byron/16.mp4','byron/17.mp4','byron/18.mp4','byron/19.mp4','byron/20.mp4','byron/21.mp4','byron/22.mp4','byron/23.mp4','byron/24.mp4','byron/25.mp4','byron/26.mp4','byron/27.mp4','byron/28.mp4',
'byron/29.mp4','byron/30.mp4','byron/31.mp4','byron/32.mp4','byron/33.mp4','byron/34.mp4','byron/35.mp4','byron/36.mp4','byron/37.mp4','byron/38.mp4','byron/39.mp4','byron/40.mp4','byron/41.mp4','byron/42.mp4',
'byron/43.mp4','byron/44.mp4','byron/45.mp4','byron/46.mp4','byron/47.mp4','byron/48.mp4','byron/49.mp4','byron/50.mp4','byron/51.mp4','byron/52.mp4','byron/53.mp4','byron/54.mp4','byron/55.mp4','byron/56.mp4',
'byron/57.mp4','byron/58.mp4','byron/59.mp4','byron/60.mp4','byron/61.mp4','byron/62.mp4','byron/63.mp4','byron/64.mp4','byron/65.mp4','byron/66.mp4','byron/67.mp4','byron/68.mp4','byron/69.mp4','byron/70.mp4',
'byron/71.mp4','byron/72.mp4','byron/73.mp4','byron/74.mp4','byron/75.mp4','byron/76.mp4','byron/77.mp4','byron/78.mp4','byron/79.mp4','byron/80.mp4','byron/81.mp4','byron/82.mp4','byron/83.mp4','byron/84.mp4',
'byron/85.mp4','byron/86.mp4','byron/87.mp4','byron/88.mp4','byron/89.mp4','byron/90.mp4','byron/91.mp4','byron/92.mp4','byron/93.mp4','byron/94.mp4','byron/95.mp4','byron/96.mp4','byron/97.mp4','byron/98.mp4',
'byron/99.mp4','byron/100.mp4','byron/101.mp4','byron/102.mp4','byron/103.mp4','byron/104.mp4','byron/105.mp4','byron/106.mp4','byron/107.mp4','byron/108.mp4','byron/109.mp4','byron/110.mp4','byron/111.mp4','byron/112.mp4',
'byron/113.mp4','byron/114.mp4','byron/115.mp4','byron/116.mp4','byron/117.mp4','byron/118.mp4','byron/119.mp4','byron/120.mp4','byron/121.mp4','byron/122.mp4','byron/123.mp4','byron/124.mp4','byron/125.mp4','byron/126.mp4',
'byron/127.mp4','byron/128.mp4','byron/129.mp4','byron/130.mp4','byron/131.mp4','byron/132.mp4','byron/133.mp4','byron/134.mp4','byron/135.mp4','byron/136.mp4','byron/137.mp4','byron/138.mp4','byron/139.mp4','byron/140.mp4',
'byron/141.mp4','byron/142.mp4','byron/143.mp4','byron/144.mp4','byron/145.mp4','byron/146.mp4','byron/147.mp4','byron/148.mp4','byron/149.mp4','byron/150.mp4','byron/151.mp4','byron/152.mp4','byron/153.mp4','byron/154.mp4',
'byron/155.mp4','byron/156.mp4','byron/157.mp4','byron/158.mp4','byron/159.mp4','byron/160.mp4','byron/161.mp4','byron/162.mp4','byron/163.mp4','byron/164.mp4','byron/165.mp4','byron/166.mp4','byron/167.mp4','byron/168.mp4',
'byron/169.mp4','byron/170.mp4','byron/171.mp4','byron/172.mp4','byron/173.mp4','byron/174.mp4','byron/175.mp4','byron/176.mp4','byron/177.mp4','byron/178.mp4','byron/179.mp4','byron/180.mp4','byron/181.mp4','byron/182.mp4',
'byron/183.mp4','byron/184.mp4','byron/185.mp4','byron/186.mp4','byron/187.mp4','byron/188.mp4','byron/189.mp4','byron/190.mp4','byron/191.mp4','byron/192.mp4','byron/193.mp4','byron/194.mp4','byron/195.mp4','byron/196.mp4',
'byron/197.mp4','byron/198.mp4','byron/199.mp4','byron/200.mp4','byron/201.mp4','byron/202.mp4','byron/203.mp4','byron/204.mp4','byron/205.mp4','byron/206.mp4','byron/207.mp4','byron/208.mp4','byron/209.mp4','byron/210.mp4',
'byron/211.mp4','byron/212.mp4','byron/213.mp4','byron/214.mp4','byron/215.mp4','byron/216.mp4','byron/217.mp4','byron/218.mp4','byron/219.mp4','byron/220.mp4','byron/221.mp4','byron/222.mp4','byron/223.mp4','byron/224.mp4',
'byron/225.mp4','byron/226.mp4','byron/227.mp4','byron/228.mp4','byron/229.mp4','byron/230.mp4','byron/231.mp4','byron/232.mp4','byron/233.mp4','byron/234.mp4','byron/235.mp4','byron/236.mp4','byron/237.mp4','byron/238.mp4',
'byron/239.mp4','byron/240.mp4','byron/241.mp4','byron/242.mp4','byron/243.mp4','byron/244.mp4','byron/245.mp4','byron/246.mp4','byron/247.mp4','byron/248.mp4','byron/249.mp4','byron/250.mp4','byron/251.mp4','byron/252.mp4',
'byron/253.mp4','byron/254.mp4','byron/255.mp4','byron/256.mp4','byron/257.mp4','byron/258.mp4','byron/259.mp4','byron/260.mp4','byron/261.mp4','byron/262.mp4','byron/263.mp4','byron/264.mp4','byron/265.mp4','byron/266.mp4',
'byron/267.mp4','byron/268.mp4','byron/269.mp4','byron/270.mp4','byron/271.mp4','byron/272.mp4','byron/273.mp4','byron/274.mp4','byron/275.mp4','byron/276.mp4','byron/277.mp4','byron/278.mp4','byron/279.mp4','byron/280.mp4',
'byron/281.mp4','byron/282.mp4','byron/283.mp4','byron/284.mp4','byron/285.mp4','byron/286.mp4','byron/287.mp4','byron/288.mp4','byron/289.mp4','byron/290.mp4','byron/291.mp4','byron/292.mp4','byron/293.mp4','byron/294.mp4',
'byron/295.mp4','byron/296.mp4','byron/297.mp4','byron/298.mp4','byron/299.mp4'*/,
/*'dailymoth/01.mp4','dailymoth/02.mp4','dailymoth/03.mp4','dailymoth/04.mp4','dailymoth/05.mp4','dailymoth/06.mp4','dailymoth/07.mp4','dailymoth/08.mp4','dailymoth/09.mp4','dailymoth/10.mp4','dailymoth/11.mp4','dailymoth/12.mp4','dailymoth/13.mp4','dailymoth/14.mp4',
'dailymoth/15.mp4','dailymoth/16.mp4','dailymoth/17.mp4','dailymoth/18.mp4','dailymoth/19.mp4','dailymoth/20.mp4','dailymoth/21.mp4','dailymoth/22.mp4','dailymoth/23.mp4','dailymoth/24.mp4','dailymoth/25.mp4','dailymoth/26.mp4','dailymoth/27.mp4','dailymoth/28.mp4',
'dailymoth/29.mp4','dailymoth/30.mp4','dailymoth/31.mp4','dailymoth/32.mp4','dailymoth/33.mp4','dailymoth/34.mp4','dailymoth/35.mp4','dailymoth/36.mp4','dailymoth/37.mp4','dailymoth/38.mp4','dailymoth/39.mp4','dailymoth/40.mp4','dailymoth/41.mp4','dailymoth/42.mp4',
'dailymoth/43.mp4','dailymoth/44.mp4','dailymoth/45.mp4','dailymoth/46.mp4','dailymoth/47.mp4','dailymoth/48.mp4','dailymoth/49.mp4','dailymoth/50.mp4','dailymoth/51.mp4','dailymoth/52.mp4','dailymoth/53.mp4','dailymoth/54.mp4','dailymoth/55.mp4','dailymoth/56.mp4',
'dailymoth/57.mp4','dailymoth/58.mp4','dailymoth/59.mp4','dailymoth/60.mp4','dailymoth/61.mp4','dailymoth/62.mp4','dailymoth/63.mp4','dailymoth/64.mp4','dailymoth/65.mp4','dailymoth/66.mp4','dailymoth/67.mp4','dailymoth/68.mp4','dailymoth/69.mp4','dailymoth/70.mp4',
'dailymoth/71.mp4','dailymoth/72.mp4','dailymoth/73.mp4','dailymoth/74.mp4','dailymoth/75.mp4','dailymoth/76.mp4','dailymoth/77.mp4','dailymoth/78.mp4','dailymoth/79.mp4','dailymoth/80.mp4','dailymoth/81.mp4','dailymoth/82.mp4','dailymoth/83.mp4','dailymoth/84.mp4',
'dailymoth/85.mp4','dailymoth/86.mp4','dailymoth/87.mp4','dailymoth/88.mp4','dailymoth/89.mp4','dailymoth/90.mp4','dailymoth/91.mp4','dailymoth/92.mp4','dailymoth/93.mp4','dailymoth/94.mp4','dailymoth/95.mp4','dailymoth/96.mp4','dailymoth/97.mp4','dailymoth/98.mp4',
'dailymoth/99.mp4','dailymoth/100.mp4','dailymoth/101.mp4','dailymoth/102.mp4','dailymoth/103.mp4','dailymoth/104.mp4','dailymoth/105.mp4','dailymoth/106.mp4','dailymoth/107.mp4','dailymoth/108.mp4','dailymoth/109.mp4','dailymoth/110.mp4','dailymoth/111.mp4','dailymoth/112.mp4',
'dailymoth/113.mp4','dailymoth/114.mp4','dailymoth/115.mp4','dailymoth/116.mp4','dailymoth/117.mp4','dailymoth/118.mp4','dailymoth/119.mp4','dailymoth/120.mp4','dailymoth/121.mp4','dailymoth/122.mp4','dailymoth/123.mp4','dailymoth/124.mp4','dailymoth/125.mp4','dailymoth/126.mp4',
'dailymoth/127.mp4','dailymoth/128.mp4','dailymoth/129.mp4','dailymoth/130.mp4','dailymoth/131.mp4','dailymoth/132.mp4','dailymoth/133.mp4','dailymoth/134.mp4','dailymoth/135.mp4','dailymoth/136.mp4','dailymoth/137.mp4','dailymoth/138.mp4','dailymoth/139.mp4','dailymoth/140.mp4',
'dailymoth/141.mp4','dailymoth/142.mp4','dailymoth/143.mp4','dailymoth/144.mp4','dailymoth/145.mp4','dailymoth/146.mp4','dailymoth/147.mp4','dailymoth/148.mp4','dailymoth/149.mp4','dailymoth/150.mp4','dailymoth/151.mp4','dailymoth/152.mp4','dailymoth/153.mp4','dailymoth/154.mp4',
'dailymoth/155.mp4','dailymoth/156.mp4','dailymoth/157.mp4','dailymoth/158.mp4','dailymoth/159.mp4','dailymoth/160.mp4','dailymoth/161.mp4','dailymoth/162.mp4','dailymoth/163.mp4','dailymoth/164.mp4','dailymoth/165.mp4','dailymoth/166.mp4','dailymoth/167.mp4','dailymoth/168.mp4',
'dailymoth/169.mp4','dailymoth/170.mp4','dailymoth/171.mp4','dailymoth/172.mp4','dailymoth/173.mp4','dailymoth/174.mp4','dailymoth/175.mp4','dailymoth/176.mp4','dailymoth/177.mp4','dailymoth/178.mp4','dailymoth/179.mp4','dailymoth/180.mp4','dailymoth/181.mp4','dailymoth/169.mp4','dailymoth/170.mp4','dailymoth/171.mp4','dailymoth/172.mp4','dailymoth/173.mp4','dailymoth/174.mp4','dailymoth/175.mp4','dailymoth/176.mp4','dailymoth/177.mp4','dailymoth/178.mp4','dailymoth/179.mp4','dailymoth/180.mp4','dailymoth/181.mp4',
'dailymoth/182.mp4','dailymoth/183.mp4','dailymoth/184.mp4','dailymoth/185.mp4','dailymoth/186.mp4','dailymoth/187.mp4','dailymoth/188.mp4','dailymoth/189.mp4','dailymoth/190.mp4','dailymoth/191.mp4','dailymoth/192.mp4','dailymoth/193.mp4','dailymoth/194.mp4','dailymoth/195.mp4',
'dailymoth/196.mp4','dailymoth/197.mp4','dailymoth/198.mp4','dailymoth/199.mp4','dailymoth/200.mp4','dailymoth/201.mp4','dailymoth/202.mp4','dailymoth/203.mp4','dailymoth/204.mp4','dailymoth/205.mp4','dailymoth/206.mp4','dailymoth/207.mp4','dailymoth/208.mp4','dailymoth/209.mp4',
'dailymoth/210.mp4','dailymoth/211.mp4','dailymoth/212.mp4','dailymoth/213.mp4','dailymoth/214.mp4','dailymoth/215.mp4','dailymoth/216.mp4','dailymoth/217.mp4','dailymoth/218.mp4','dailymoth/219.mp4','dailymoth/220.mp4','dailymoth/221.mp4','dailymoth/222.mp4','dailymoth/223.mp4',
'dailymoth/224.mp4','dailymoth/225.mp4','dailymoth/226.mp4','dailymoth/227.mp4','dailymoth/228.mp4','dailymoth/229.mp4','dailymoth/230.mp4','dailymoth/231.mp4','dailymoth/232.mp4','dailymoth/233.mp4','dailymoth/234.mp4','dailymoth/235.mp4','dailymoth/236.mp4','dailymoth/237.mp4',
'dailymoth/238.mp4','dailymoth/239.mp4','dailymoth/240.mp4','dailymoth/241.mp4','dailymoth/242.mp4','dailymoth/243.mp4','dailymoth/244.mp4','dailymoth/245.mp4','dailymoth/246.mp4','dailymoth/247.mp4','dailymoth/248.mp4','dailymoth/249.mp4','dailymoth/250.mp4','dailymoth/251.mp4',
'dailymoth/252.mp4','dailymoth/253.mp4','dailymoth/254.mp4','dailymoth/255.mp4','dailymoth/256.mp4','dailymoth/257.mp4','dailymoth/258.mp4','dailymoth/259.mp4','dailymoth/260.mp4','dailymoth/261.mp4','dailymoth/262.mp4','dailymoth/263.mp4','dailymoth/264.mp4','dailymoth/265.mp4',
'dailymoth/266.mp4','dailymoth/267.mp4','dailymoth/268.mp4','dailymoth/269.mp4','dailymoth/270.mp4','dailymoth/271.mp4','dailymoth/272.mp4','dailymoth/273.mp4','dailymoth/274.mp4','dailymoth/275.mp4','dailymoth/276.mp4','dailymoth/277.mp4','dailymoth/278.mp4','dailymoth/279.mp4',
'dailymoth/280.mp4','dailymoth/281.mp4','dailymoth/282.mp4','dailymoth/283.mp4','dailymoth/284.mp4','dailymoth/285.mp4','dailymoth/286.mp4','dailymoth/287.mp4','dailymoth/288.mp4','dailymoth/289.mp4','dailymoth/290.mp4','dailymoth/291.mp4','dailymoth/292.mp4',
'dailymoth/293.mp4','dailymoth/294.mp4','dailymoth/295.mp4','dailymoth/296.mp4','dailymoth/297.mp4','dailymoth/298.mp4','dailymoth/299.mp4','dailymoth/300.mp4','dailymoth/301.mp4','dailymoth/302.mp4','dailymoth/303.mp4','dailymoth/304.mp4','dailymoth/305.mp4','dailymoth/306.mp4',
'dailymoth/307.mp4','dailymoth/308.mp4','dailymoth/309.mp4','dailymoth/310.mp4','dailymoth/311.mp4','dailymoth/312.mp4','dailymoth/313.mp4','dailymoth/314.mp4','dailymoth/315.mp4',
*/


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