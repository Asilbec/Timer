resetBackground = document.body.style.backgroundColor;
resetText = document.getElementById("Time").style.color
resetShadow =  document.getElementById("Time").style.textShadow


function increase(clicked_id){
  var time  = document.getElementById("Time").innerHTML
  time = time.replace(":","")
  document.getElementById("Time").innerHTML = (time + clicked_id).substr(time.length-3,5);
  var time = document.getElementById("Time").innerHTML
  document.getElementById("Time").innerHTML = time.substr(0,2) + ":" + time.substr(2,3)


  }

var permisionThings = true;

function clearScreen(){
  document.getElementById("Time").innerHTML = "00:00";
}

var minutes;
var seconds;

function start(){
  var time  = document.getElementById("Time").innerHTML;

  time = time.replace(":","")
  var x = document.getElementById("Numbers");
  var y = document.getElementById("TimerContainer");

  if (parseInt(time)<1){
    console.log("nope")
  }
  else{
    document.getElementById("Reset").style.display = "flex";
    x.style.display = 'none';
    y.style.display = "none"
    var minutes = parseInt(time.substr(0,1)+time.substr(1,1))*60;
    var seconds = parseInt(time.substr(2,4));
    var totalTime = minutes+seconds


    var counter = setInterval(function(){ totalTime = totalTime-1;
      if (permisionThings ==true){
      minutes = Math.floor(totalTime / 60 );
      seconds = totalTime % 60;
      if (seconds<10){
        seconds = "0"+seconds;
        console.log("node")
      }
      if (minutes<10){
        minutes = "0"+minutes;

      }

      document.getElementById("Time").innerHTML = minutes +":"+ seconds
      if (totalTime<=0){
        clearInterval(counter);
        document.getElementById("Time").innerHTML = "Finished"
        puaseMusic()
        playFinished()
 
      }}
      else{
        permisionThings = true;
        clearInterval(counter);
        document.getElementById("Time").innerHTML = "00:00"
        
      }
     }, 1000);
     permisionThings=true;

  }
  
}



function test(t) {
  document.body.style.backgroundColor = t.value;

}


function openNav() {
  document.getElementById("ThePage").style.width = "250px";
  document.getElementById("ThePage").style.borderRight = "5px solid white";
  document.getElementById("Reset").style.display = "none";

}

function closeNav() {
  document.getElementById("ThePage").style.width = "0";
  document.getElementById("ThePage").style.borderRight = "0px solid white";
  if (document.getElementById("Numbers").style.display == "none"){
    document.getElementById("Reset").style.display = "flex";

  }
}


function change(t) {
  document.getElementById("Time").style.color = t.value;
}

function changeShadow(t) {
  document.getElementById("Time").style.textShadow =  "5px 12px "+t.value;
}




function starOver(){
  permisionThings = false;
  document.getElementById("Reset").style.display = "none"
  var x = document.getElementById("Numbers");
  var y = document.getElementById("TimerContainer");
  x.style.display = 'grid';
  y.style.display = "flex";
  document.getElementById("Time").innerHTML = "00:00";
  minutes = 0;
  seconds = 0;
}
function setBackToNormal(){
  document.getElementById("Time").style.textShadow = resetBackground;
  document.getElementById("Time").style.color = resetText;
  document.getElementById("Time").style.textShadow = resetShadow;

}




function puaseMusic(){
  var x = document.getElementById("myAudio"); 
  x.pause();
}

function startMusic(){
  var x = document.getElementById("myAudio"); 
  x.play();
}


function playFinished(){
  var x = document.getElementById("myAudioFinished"); 
  x.play();
}