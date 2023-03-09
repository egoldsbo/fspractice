// Check if service worker is supported by browser
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(registration => {
          console.log('Service Worker Registered');
        })
        .catch(err => {
          console.error('Service Worker Registration Failed: ', err);
        });
    });
  }
//addnewsigns
  var mostcommonsigns = ["again.mp4", "also.mp4", "ask.mp4", "because.mp4", "boy.mp4", 
  "but.mp4", "can.mp4", "come.mp4", "condone.mp4", "deaf.mp4", "different.mp4", 
  "drink.mp4", "drive.mp4", "eat.mp4", "email.mp4", "family.mp4", "feel.mp4",
   "few.mp4", "find.mp4", "fine.mp4", "fingerspell.mp4", "finish.mp4", 
   "food.mp4", "for.mp4", "forget.mp4", "friend.mp4", "get.mp4", "girl.mp4", "give.mp4",
    "go.mp4", "good.mp4", "have.mp4", "he.mp4", "hearing.mp4", "hello.mp4", "help.mp4", 
    "home.mp4", "how.mp4", "Internet.mp4", "know.mp4", "later.mp4", "like.mp4",
     "little.mp4", "live.mp4", "man.mp4", "many.mp4", "me.mp4", "meet.mp4", "more.mp4", 
     "my.mp4", "name.mp4", "need.mp4", "new.mp4", "no.mp4", "not.mp4", "now.mp4", 
     "ok.mp4", "old.mp4", "other.mp4", "please.mp4", "remember.mp4", "same.mp4", 
     "say.mp4", "school.mp4", "see.mp4", "she.mp4", "should.mp4", "sign.mp4",
      "slow.mp4", "some.mp4", "sorry.mp4", "store.mp4", "take.mp4", "tell.mp4",
       "text.mp4", "thanks.mp4", "their.mp4", "they.mp4", "think.mp4", "time.mp4", 
       "tired.mp4", "try.mp4", "understand.mp4", "use.mp4", "wait.mp4", "want.mp4", 
       "what.mp4", "when.mp4", "where.mp4", "which.mp4", "who.mp4", "why.mp4", 
       "will.mp4", "with.mp4", "woman.mp4", "work.mp4", "write.mp4", "yes.mp4",
        "you.mp4", "your.mp4"];


        var mostcommonsigns2 = ['about.mp4',  'after.mp4',  'against.mp4',  'answer.mp4', 
         'any.mp4',  'arrive.mp4',  'beautiful.mp4',  'because.mp4',  'before.mp4', 
          'better.mp4',  'big.mp4',  'bring.mp4',  'busy.mp4',  'buy.mp4',  'change.mp4', 
           'cleanup.mp4',  'close.mp4',  'cold.mp4',  'color.mp4',  'day.mp4',  'early.mp4',
             'easy.mp4',  'enough.mp4',  'every.mp4',  'false.mp4',  'far.mp4',  'fast.mp4',
    'follow.mp4',  'from.mp4',  'gone.mp4',  'happy.mp4',  'hard.mp4',  'here.mp4',
    'hot.mp4',  'hurt.mp4',  'improve.mp4',  'in.mp4',  'inform.mp4',  
    'interpreter.mp4',  'keep.mp4',  'last.mp4',  'late.mp4',  'learn.mp4', 
    'leave.mp4',  'search.mp4',  'lot.mp4',  'make.mp4',  'meaning.mp4', 
    'minute.mp4',  'month.mp4',  'morning.mp4',  'most.mp4',  'must.mp4', 
    'near.mp4',  'never.mp4',  'next.mp4',  'night.mp4',  'nothing.mp4', 'only.mp4', 
     'open.mp4',  'opposite.mp4',  'out.mp4',  'people.mp4', 
    'plan.mp4',  'practice.mp4',  'prefer.mp4',  'question.mp4',  'read.mp4',
     'ready.mp4',  'rest.mp4',  'right.mp4',  'run.mp4',  'sad.mp4', 
      'send.mp4',  'show.mp4',  'sit.mp4',  'sleep.mp4',  'small.mp4', 
      'something.mp4',  'sometimes.mp4',  'start.mp4',  'stay.mp4',  
        'still.mp4',  'stop.mp4',  'support.mp4',  'talk.mp4',  'teach.mp4', 
         'than.mp4',  'thing.mp4',  'today.mp4',  'toilet.mp4',  
         'tomorrow.mp4',  'true.mp4',  'until.mp4',  'visit.mp4',  'walk.mp4',  
         'warm.mp4',  'watch.mp4',  'wrong.mp4',  'yesterday.mp4' 
    ];

var mostcommonsigns3 = ['accept.mp4',  'afternoon.mp4',  'agree.mp4',  'allow.mp4',  
'almost.mp4',  'alone.mp4',  'always.mp4',  'and.mp4',  'angry.mp4',  'animal.mp4', 
 'anything.mp4',  'argue.mp4',  'ASL.mp4',  'attitude.mp4',  'autumn.mp4',  'average.mp4',  
 'avoid.mp4',  'away.mp4',  'basic.mp4',  'believe.mp4',  'best.mp4',  'book.mp4',  
 'both.mp4',  'brother.mp4',  'calm.mp4',  'car.mp4',  'class.mp4',  'close.mp4',  
 'comfortable.mp4',  'deep.mp4',  'doubt.mp4',  'English.mp4',  'everyday.mp4',  
 'everything.mp4',  'example.mp4',  'father.mp4',  'funny.mp4',  'game.mp4',  'gift.mp4', 
  'grow.mp4',  'guess.mp4',  'happen.mp4',  'hear.mp4',  'hold.mp4',  'house.mp4', 
   'idea.mp4',  'if.mp4',  'important.mp4',  'include.mp4',  'joke.mp4',  'letter.mp4', 
    'life.mp4',  'looklike.mp4',  'lose.mp4',  'love.mp4',  'money.mp4',  'mother.mp4', 
    'move.mp4',  'movie.mp4',  'normal.mp4',  'number.mp4',  'offspring.mp4',  'outside.mp4',
'overlook.mp4',  'paper.mp4',  'party.mp4',  'pay.mp4',  'pen.mp4',  'picture.mp4', 
'play.mp4',  'problem.mp4',  'room.mp4',  'safe.mp4',  'sell.mp4',  'service.mp4', 
'share.mp4',  'sick.mp4',  'since.mp4',  'sister.mp4',  'smart.mp4',  'soon.mp4', 
          'spring.mp4',  'story.mp4',  'struggle.mp4',  'study.mp4',  'summer.mp4',  'sure.mp4',
    'that.mp4',  'travel.mp4',  'wash.mp4',  'water.mp4',  'week.mp4',  'weekend.mp4', 
    'winter.mp4',  'wish.mp4',  'word.mp4',  'worse.mp4',  'notyet.mp4',  'young.mp4', 
     'yourself.mp4'

                ];



var dir= "mostcommonsigns/";



var filearray=[];
var filenames=[];
var vid1=document.getElementById("vid1");
var vid2=document.getElementById("vid2");
var currentvid=vid1;
var nextvid=vid2;
var fileindex=0;
var speedsarray=[.25,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
var speedindex=2;
var currentspeed=1;
var playcount=0;
var loopmode=0;
var automode=0;

vid1.addEventListener("ended", onended1);
vid2.addEventListener("ended", onended2);
function onended1() {
playcount++;
console.log("ended 1",playcount);
if(loopmode==true){
    vid1.play();
}

if(automode==true&&playcount>3 ){
console.log("autoloopnext");
playcount=0;
next();

}

}


function onended2() {
    playcount++;
    console.log("ended 2",playcount);
    if(loopmode==true){
        vid2.play();
    }
    if(automode==true&&playcount>3 ){
        console.log("autoloopnext");
        playcount=0;
        next();
        
        }
    }

var revealword = document.getElementById("revealword");
revealword.addEventListener("mousedown", function() {
    revealword.innerHTML = filenames[fileindex-1];
});


revealword.addEventListener("mouseup", function() {
    revealword.innerHTML = " [click to reveal sign]";
});

revealword.addEventListener("touchstart", function() {
    revealword.innerHTML = filenames[fileindex-1];
});
revealword.addEventListener("touchend", function() {
    revealword.innerHTML = " [click to reveal sign]";
});

function startup(){
for(var i=0; i<mostcommonsigns.length;i++){
    filearray[i]=mostcommonsigns[i];
}
dir="mostcommonsigns/";
generaterandomarray();

}



function generaterandomarray(){


for (let i = filearray.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
[filearray[i], filearray[j]] = [filearray[j], filearray[i]];
}

for(var i=0;i<filearray.length;i++){
    filenames[i]=filearray[i].slice(0,-4);
}

for(var i=0;i<filearray.length;i++){
    filearray[i]=dir+filearray[i];
}


currentvid=vid1;
nextvid=vid2;
vid1.src=filearray[0];
vid2.src=filearray[1];

vid1.style.display="block";
fileindex=1;


}


function togglevideo(){
if(vid1.style.display=="none"){
    vid1.style.display="block";
    vid2.style.display="none";
    currentvid=vid1;
    nextvid=vid2;
}
else{
vid1.style.display="none";
vid2.style.display="block";
currentvid=vid2;
nextvid=vid1;
}
}


function next(){
togglevideo();
currentvid.playbackRate=currentspeed;
currentvid.play()
nextvid.src=filearray[fileindex+1];
fileindex++;
if(fileindex>=filearray.length-2){
   fileindex=0;
}
}


function again(){
    currentvid.playbackRate=currentspeed;
    currentvid.play();
}

function playbackspeed(direction){
var speeddisplay=document.getElementById("speeddisplay");
if(direction=='+'){
speedindex++;
if(speedindex>=speedsarray.length-1){
    speedindex=speedsarray.length-1;
}
    currentspeed=speedsarray[speedindex];

}
if(direction=='-'){
    speedindex--;
if(speedindex<0){
    speedindex=0;
}
        currentspeed=speedsarray[speedindex];
    
}
currentvid.playbackRate=currentspeed;
speeddisplay.innerHTML=currentspeed+"x";
}



function openLink(ww) {
    var currentfilename= filenames[fileindex-1];
    var URL2=  currentfilename;
    if(ww==1){
    var URL1= "https://aslsignbank.haskins.yale.edu/signs/search/?search=&keyword=";
    var URL3=URL1+URL2;
    window.open(URL3, '_blank');
    }
    if(ww==0){
    var URL1= "https://www.signasl.org/sign/";
    var URL3=URL1+URL2;
    window.open(URL3, '_blank');
    }
    if(ww==2){
    var URL1= "https://www.signingsavvy.com/search/";
    var URL3=URL1+URL2;
    window.open(URL3, '_blank');
    }
    if(ww==3){
      var letter=currentfilename.charAt(0);
    var URL1= "https://lifeprint.com/asl101/pages-signs/"+letter+"/"+currentfilename+".htm";

    window.open(URL1, '_blank');
    }
  
}

function dropdown(){
    //addnewsigns
    filearray=[];
    var selectedOption = document.getElementById("mySelect").value;
    if(selectedOption=="mostcommonsigns"){
        for(var i=0; i<mostcommonsigns.length;i++){
            filearray[i]=mostcommonsigns[i];
        }   
        dir="mostcommonsigns/";
    }
    if(selectedOption=="mostcommonsigns2"){
        for(var i=0; i<mostcommonsigns2.length;i++){
            filearray[i]=mostcommonsigns2[i];
        }
        dir="mostcommonsigns2/";
    }
        if(selectedOption=="mostcommonsigns3"){
            for(var i=0; i<mostcommonsigns3.length;i++){
                filearray[i]=mostcommonsigns3[i];
            }
            dir="mostcommonsigns3/";
    
        }
    generaterandomarray();
}








function setloop(){
    var loopbutton=document.getElementById("loopbutton");

    if(loopmode==false){
        loopmode=true;
        loopbutton.innerHTML="loop on";
    }
    else{
        loopmode=false;
        loopbutton.innerHTML="loop off";
    }
}

function setauto(){
    var autobutton=document.getElementById("autobutton");
    var loopbutton=document.getElementById("loopbutton");
    if(automode==false){
        automode=true;
        loopmode=true;
       autobutton.innerHTML="auto on";
       loopbutton.innterHTML="loop on";
    }
    else{
        automode=false;
        loopmode=false;
        autobutton.innerHTML="auto off";
        loopbutton.innterHTML="loop off";

    }

    playcount=0;
}


