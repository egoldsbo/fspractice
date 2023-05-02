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

                var byron=[
'01.mp4', '02.mp4','03.mp4','04.mp4','05.mp4','06.mp4','07.mp4','08.mp4','09.mp4','10.mp4','11.mp4','12.mp4','13.mp4','14.mp4','15.mp4','16.mp4','17.mp4','18.mp4','19.mp4','20.mp4',
'21.mp4','22.mp4','23.mp4','24.mp4','25.mp4','26.mp4','27.mp4','28.mp4','29.mp4','30.mp4','31.mp4','32.mp4','33.mp4','34.mp4','35.mp4','36.mp4','37.mp4','38.mp4','39.mp4','40.mp4',
'41.mp4','42.mp4','43.mp4','44.mp4','45.mp4','46.mp4','47.mp4','48.mp4','49.mp4','50.mp4','51.mp4','52.mp4','53.mp4','54.mp4','55.mp4','56.mp4','57.mp4','58.mp4','59.mp4','60.mp4',
'61.mp4','62.mp4','63.mp4','64.mp4','65.mp4','66.mp4','67.mp4','68.mp4','69.mp4','70.mp4','71.mp4','72.mp4','73.mp4','74.mp4','75.mp4','76.mp4','77.mp4','78.mp4','79.mp4','80.mp4',
'81.mp4','82.mp4','83.mp4','84.mp4','85.mp4','86.mp4','87.mp4','88.mp4','89.mp4','90.mp4','91.mp4','92.mp4','93.mp4','94.mp4','95.mp4','96.mp4','97.mp4','98.mp4','99.mp4','100.mp4',
'101.mp4','102.mp4','103.mp4','104.mp4','105.mp4','106.mp4','107.mp4','108.mp4','109.mp4','110.mp4','111.mp4','112.mp4','113.mp4','114.mp4','115.mp4','116.mp4','117.mp4','118.mp4','119.mp4','120.mp4',
'121.mp4','122.mp4','123.mp4','124.mp4','125.mp4','126.mp4','127.mp4','128.mp4','129.mp4','130.mp4','131.mp4','132.mp4','133.mp4','134.mp4','135.mp4','136.mp4','137.mp4','138.mp4','139.mp4','140.mp4',
'141.mp4','142.mp4','143.mp4','144.mp4','145.mp4','146.mp4','147.mp4','148.mp4','149.mp4','150.mp4','151.mp4','152.mp4','153.mp4','154.mp4','155.mp4','156.mp4','157.mp4','158.mp4','159.mp4','160.mp4',
'161.mp4','162.mp4','163.mp4','164.mp4','165.mp4','166.mp4','167.mp4','168.mp4','169.mp4','170.mp4','171.mp4','172.mp4','173.mp4','174.mp4','175.mp4','176.mp4','177.mp4','178.mp4','179.mp4','180.mp4',
'181.mp4','182.mp4','183.mp4','184.mp4','185.mp4','186.mp4','187.mp4','188.mp4','189.mp4','190.mp4','191.mp4','192.mp4','193.mp4','194.mp4','195.mp4','196.mp4','197.mp4','198.mp4','199.mp4','200.mp4',
'201.mp4','202.mp4','203.mp4','204.mp4','205.mp4','206.mp4','207.mp4','208.mp4','209.mp4','210.mp4','211.mp4','212.mp4','213.mp4','214.mp4','215.mp4','216.mp4','217.mp4','218.mp4','219.mp4'
];
var forevan=[
    '01.mp4', '02.mp4','03.mp4','04.mp4','05.mp4','06.mp4','07.mp4','08.mp4','09.mp4','10.mp4','11.mp4','12.mp4','13.mp4','14.mp4','15.mp4','16.mp4','17.mp4','18.mp4','19.mp4','20.mp4',
    '21.mp4','22.mp4','23.mp4','24.mp4','25.mp4','26.mp4','27.mp4','28.mp4','29.mp4','30.mp4','31.mp4','32.mp4','33.mp4','34.mp4','35.mp4','36.mp4','37.mp4','38.mp4','39.mp4','40.mp4',
    '41.mp4','42.mp4','43.mp4','44.mp4','45.mp4','46.mp4','47.mp4','48.mp4','49.mp4','50.mp4','51.mp4','52.mp4','53.mp4','54.mp4','55.mp4','56.mp4','57.mp4','58.mp4','59.mp4','60.mp4',
    '61.mp4','62.mp4','63.mp4','64.mp4','65.mp4','66.mp4','67.mp4','68.mp4','69.mp4','70.mp4','71.mp4','72.mp4','73.mp4','74.mp4','75.mp4','76.mp4','77.mp4','78.mp4','79.mp4','80.mp4',
    ];


    var dailymoth=[
        '01.mp4', '02.mp4','03.mp4','04.mp4','05.mp4','06.mp4','07.mp4','08.mp4','09.mp4','10.mp4','11.mp4','12.mp4','13.mp4','14.mp4','15.mp4','16.mp4','17.mp4','18.mp4','19.mp4','20.mp4',
        '21.mp4','22.mp4','23.mp4','24.mp4','25.mp4','26.mp4','27.mp4','28.mp4','29.mp4','30.mp4','31.mp4','32.mp4','33.mp4','34.mp4','35.mp4','36.mp4','37.mp4','38.mp4','39.mp4','40.mp4',
        '41.mp4','42.mp4','43.mp4','44.mp4','45.mp4','46.mp4','47.mp4','48.mp4','49.mp4','50.mp4','51.mp4','52.mp4','53.mp4','54.mp4','55.mp4','56.mp4','57.mp4','58.mp4','59.mp4','60.mp4',
        '61.mp4','62.mp4','63.mp4','64.mp4','65.mp4','66.mp4','67.mp4','68.mp4','69.mp4','70.mp4','71.mp4','72.mp4','73.mp4','74.mp4','75.mp4','76.mp4','77.mp4','78.mp4','79.mp4','80.mp4',
        '81.mp4','82.mp4','83.mp4','84.mp4','85.mp4','86.mp4','87.mp4','88.mp4','89.mp4','90.mp4','91.mp4','92.mp4','93.mp4','94.mp4','95.mp4','96.mp4','97.mp4','98.mp4','99.mp4','100.mp4',
        '101.mp4','102.mp4','103.mp4','104.mp4','105.mp4','106.mp4','107.mp4','108.mp4','109.mp4','110.mp4','111.mp4','112.mp4','113.mp4','114.mp4','115.mp4','116.mp4','117.mp4','118.mp4','119.mp4','120.mp4',
        '121.mp4','122.mp4','123.mp4','124.mp4','125.mp4','126.mp4','127.mp4','128.mp4','129.mp4','130.mp4','131.mp4','132.mp4','133.mp4','134.mp4','135.mp4','136.mp4','137.mp4','138.mp4','139.mp4','140.mp4',
        '141.mp4','142.mp4','143.mp4','144.mp4','145.mp4','146.mp4','147.mp4','148.mp4','149.mp4','150.mp4','151.mp4','152.mp4','153.mp4','154.mp4','155.mp4','156.mp4','157.mp4','158.mp4','159.mp4','160.mp4',
        '161.mp4','162.mp4','163.mp4','164.mp4','165.mp4','166.mp4','167.mp4','168.mp4','169.mp4','170.mp4','171.mp4','172.mp4','173.mp4','174.mp4','175.mp4','176.mp4','177.mp4','178.mp4','179.mp4','180.mp4',
        '181.mp4','182.mp4','183.mp4','184.mp4','185.mp4','186.mp4','187.mp4','188.mp4','189.mp4','190.mp4','191.mp4','192.mp4','193.mp4','194.mp4','195.mp4','196.mp4','197.mp4','198.mp4','199.mp4','200.mp4',
        '201.mp4','202.mp4','203.mp4','204.mp4','205.mp4','206.mp4','207.mp4','208.mp4','209.mp4','210.mp4','211.mp4','212.mp4','213.mp4','214.mp4','215.mp4','216.mp4','217.mp4','218.mp4','219.mp4','220.mp4',
        '221.mp4','222.mp4','223.mp4','224.mp4','225.mp4','226.mp4','227.mp4','228.mp4','229.mp4','230.mp4','231.mp4','232.mp4','233.mp4','234.mp4','235.mp4','236.mp4','237.mp4','238.mp4','239.mp4','240.mp4',
        '241.mp4','242.mp4','243.mp4','244.mp4','245.mp4','246.mp4','247.mp4','248.mp4','249.mp4','250.mp4','251.mp4','252.mp4','253.mp4','254.mp4','255.mp4','256.mp4','257.mp4','258.mp4','259.mp4','260.mp4',
        '261.mp4','262.mp4','263.mp4','264.mp4','265.mp4','266.mp4','267.mp4','268.mp4','269.mp4','270.mp4','271.mp4','272.mp4','273.mp4','274.mp4','275.mp4','276.mp4','277.mp4','278.mp4','279.mp4','280.mp4', '281.mp4','282.mp4','283.mp4','284.mp4','285.mp4','286.mp4','287.mp4','288.mp4','289.mp4','290.mp4','291.mp4','292.mp4','293.mp4','294.mp4','295.mp4','296.mp4','297.mp4','298.mp4','299.mp4','300.mp4',
        '301.mp4','302.mp4','303.mp4','304.mp4','305.mp4','306.mp4','307.mp4','308.mp4','309.mp4','310.mp4','311.mp4','312.mp4','313.mp4','314.mp4','315.mp4',
        '316.mp4','317.mp4','318.mp4','319.mp4','320.mp4','321.mp4','322.mp4','323.mp4','324.mp4','325.mp4','326.mp4','327.mp4','328.mp4','329.mp4','330.mp4',
        '331.mp4','332.mp4','333.mp4','334.mp4','335.mp4','336.mp4','337.mp4','338.mp4','339.mp4','340.mp4','341.mp4','342.mp4','343.mp4','344.mp4','345.mp4',
        '346.mp4','347.mp4','348.mp4','349.mp4','350.mp4','351.mp4','352.mp4','353.mp4','354.mp4',
        ];

var dir= "mostcommonsigns/";



var filearray=[];
var filenames=[];
var vid1=document.getElementById("vid1");
var vid2=document.getElementById("vid2");
var currentvid=vid1;
var nextvid=vid2;
var fileindex=0;
var speedsarray=[.1,.25,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
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
    slowedonce=false;
togglevideo();
currentvid.playbackRate=currentspeed;
currentvid.play()
nextvid.src=filearray[fileindex+1];
fileindex++;
if(fileindex>=filearray.length-2){
   fileindex=0;
}
}

var slowedonce=false;

function again(isslow){
    currentvid.playbackRate=currentspeed;
    if(isslow==true){
        currentvid.playbackRate=0.5;
        if(slowedonce==true){
            currentvid.playbackRate=0.25;
        }
        slowedonce=true;
    }   
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
        if(selectedOption=="byron"){
            for(var i=0; i<byron.length;i++){
                filearray[i]=byron[i];
            }
            dir="byron/";
    
        }

        if(selectedOption=="forevan"){
            for(var i=0; i<forevan.length;i++){
                filearray[i]=forevan[i];
            }
            dir="forevan/";
    
        }
        if(selectedOption=="dailymoth"){
            for(var i=0; i<dailymoth.length;i++){
                filearray[i]=dailymoth[i];
            }
            dir="dailymoth/";
    
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

var aboutstate=0;
var aboutcount=0;
var secretunlock=0;
function setabout(){
    var about=document.getElementById("about");
    aboutcount++;
    
    if(aboutcount>10&&secretunlock==0){
secretunlock=1;
const selectElement = document.getElementById("mySelect");
const newOption = document.createElement("option");
const newOption2 = document.createElement("option");
const newOption3 = document.createElement("option");
newOption2.value = "byron";
newOption2.text = "byron";
newOption.value = "forevan";
newOption.text = "forevan";
newOption3.value = "dailymoth";
newOption3.text = "dailymoth";

// append the new option element to the select element
///selectElement.appendChild(newOption2);
///selectElement.appendChild(newOption);
selectElement.appendChild(newOption3);
    }
    if(aboutstate==0){

    aboutstate=1;
    about.style.display="block";
    vid1.style.display="none";
    vid2.style.display="none";
    console.log("abouton");
    }
    else{
        aboutstate=0;
        about.style.display="none";
        next();
    }
}