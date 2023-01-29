if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
  }


var mostcommonsigns=["again.mp4","also.mp4","ask.mp4","because.mp4","boy.mp4","but.mp4","can.mp4",
"come.mp4","condone.mp4","deaf.mp4","different.mp4","drink.mp4","drive.mp4","eat.mp4","email.mp4",
"family.mp4","feel.mp4","few.mp4","find.mp4","fine.mp4","fingerspell.mp4","finish.mp4","food.mp4",
"for.mp4","forget.mp4","friend.mp4","get.mp4","girl.mp4","give.mp4","go.mp4","good.mp4","have.mp4",
"he.mp4","hearing.mp4","hello.mp4","help.mp4","home.mp4","how.mp4","internet.mp4","know.mp4","later.mp4",
"like.mp4","little.mp4","live.mp4","man.mp4","many.mp4","me.mp4","meet.mp4","more.mp4","my.mp4","name.mp4",
"need.mp4"];
var mostcommonsigns2 = ["about.mp4", "after.mp4", "against.mp4", "answer.mp4", "any.mp4", "arrive.mp4", 
"bad.mp4", "beautiful.mp4", "before.mp4", "better.mp4", "big.mp4", "bring.mp4", "busy.mp4", "buy.mp4", 
"change.mp4", "cleanup.mp4", "close.mp4", "cold.mp4", "color.mp4", "day.mp4", "early.mp4", "easy.mp4", 
"enough.mp4", "every.mp4", "false.mp4", "far.mp4", "fast.mp4", "follow.mp4", "from.mp4", "gone.mp4", 
"happy.mp4", "hard.mp4", "here.mp4", "hot.mp4", "hurt.mp4", "improve.mp4", "in.mp4", "inform.mp4",
 "interpreter.mp4", "keep.mp4", "last.mp4", "late.mp4", "learn.mp4", "leave.mp4", "lookfor.mp4", "lot.mp4",
  "make.mp4", "meaning.mp4", "minute.mp4", "month.mp4"];





var dir= "mostcommonsigns/";



var filearray=[];
var filenames=[];
var vid1=document.getElementById("vid1");
var vid2=document.getElementById("vid2");
var currentvid=vid1;
var nextvid=vid2;
var fileindex=0;
var speedsarray=[.25,0.5,1,1.5,2,2.5,3];
var speedindex=2;
var currentspeed=1;



var revealword = document.getElementById("revealword");
revealword.addEventListener("mousedown", function() {
    revealword.innerHTML = filenames[fileindex-1];
});
revealword.addEventListener("mouseup", function() {
    revealword.innerHTML = " [click to reveal sign]";
});

function startup(){
    filearray=mostcommonsigns;
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

console.log(filenames);

currentvid=vid1;
nextvid=vid2;
vid1.src=filearray[0];
vid2.src=filearray[1];
vid1.style.display="block";
vid2.style.display="none";
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
    var selectedOption = document.getElementById("mySelect").value;
    if(selectedOption=="mostcommonsigns"){
        filearray=mostcommonsigns;
        dir="mostcommonsigns/";

    }
    if(selectedOption=="mostcommonsigns2"){
        filearray=mostcommonsigns2;
        dir="mostcommonsigns2/";

    }

    generaterandomarray();
}

function setloop(){
    if(vid1.loop==false){
        vid1.loop=true;
        vid2.loop=true;
    }
    else
    if(vid1.loop==true){
        vid1.loop=false;
        vid2.loop=false;
    }
}

