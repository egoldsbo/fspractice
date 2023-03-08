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


        var mostcommonsigns2 = ["about", "after", "against", "answer", "any",
         "arrive", "beautiful", "because", "before", "better", "big", "bring", 
         "busy", "buy", "change", "cleanup", "close", "cold", "color", "day", 
         "early", "easy", "enough", "every", "false", "far", "fast", "follow",
          "from", "gone", "happy", "hard", "here", "hot", "hurt", "improve",
           "in", "inform", "interpreter", "keep", "last", "late", "learn",
            "leave", "search", "lot", "make", "meaning", "minute", "month",
             "morning", "most", "must", "near", "never", "next", "night",
              "nothing", "only", "open", "opposite", "out", "people", "plan", 
              "practice", "prefer", "question", "read", "ready", "rest", "right",
               "run", "sad", "send", "show", "sit", "sleep", "small", "something",
                "sometimes", "start", "stay", "still", "stop", "support", "talk", 
                "teach", "than", "thing", "today", "toilet", "tomorrow", "true", 
                "until", "visit", "walk", "warm", "watch", "wrong", "yesterday"];

                var mostcommonsigns3 = ['accept', 'afternoon', 'agree', 'allow', 'almost', 'alone', 'always', 'and', 'angry', 'animal',
                'anything', 'argue', 'ASL', 'attitude', 'autumn', 'average', 'avoid', 'away', 'basic', 'believe',
                'best', 'book', 'both', 'brother', 'calm', 'car', 'class', 'close', 'comfortable', 'deep',
                'doubt', 'English', 'everyday', 'everything', 'example', 'father', 'funny', 'game', 'gift', 'grow',
                'guess', 'happen', 'hear', 'hold', 'house', 'idea', 'if', 'important', 'include', 'joke',
                'letter', 'life', 'looklike', 'lose', 'love', 'money', 'mother', 'move', 'movie', 'normal',
                'number', 'offspring', 'outside', 'overlook', 'paper', 'party', 'pay', 'pen', 'picture', 'play',
                'problem', 'room', 'safe', 'sell', 'service', 'share', 'sick', 'since', 'sister', 'smart',
                'soon', 'spring', 'story', 'struggle', 'study', 'summer', 'sure', 'that', 'travel', 'wash',
                'water', 'week', 'weekend', 'winter', 'wish', 'word', 'worse', 'notyet', 'young', 'yourself'
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


