
function increase(clicked_id){
  console.log(clicked_id);
  var time  = document.getElementById("Time").innerHTML
  time = time.replace(":","")
  console.log(time)
  document.getElementById("Time").innerHTML = (time + clicked_id).substr(time.length-3,5);
  var time = document.getElementById("Time").innerHTML
  document.getElementById("Time").innerHTML = time.substr(0,2) + ":" + time.substr(2,3)


  }

var permisionThings = true;

function clearScreen(){
  document.getElementById("Time").innerHTML = "00:00";
}


function start(){
  var time  = document.getElementById("Time").innerHTML
  time = time.replace(":","")
  var x = document.getElementById("Numbers");
  var y = document.getElementById("TimerContainer");

  if (parseInt(time)<1){
    console.log("nah")
  }
  else{
    x.style.display = 'none';
    y.style.display = "none"
    var minutes = parseInt(time.substr(0,1)+time.substr(1,1))*60;
    console.log(minutes)
    var seconds = parseInt(time.substr(2,4));
    console.log(seconds)
    var totalTime = minutes+seconds
    console.log(totalTime)

    var counter = setInterval(function(){ totalTime = totalTime-1;
      var minutes = Math.floor(totalTime / 60 );
      var seconds = totalTime % 60;
      document.getElementById("Time").innerHTML = minutes +":"+ seconds
      console.log(minutes)
      console.log(minutes)
      if (totalTime<=0){
        clearInterval(counter);
        document.getElementById("Time").innerHTML = "Finished"
      }
     }, 1000);

  }
  
}

if (permisionThings == true){
  function animateBg(i) {
    document.body.style.backgroundColor = 'hsl(' + i + ', 100%, 25%)';

    
    setTimeout(function() {
        animateBg(++i)
    }, i);
  }
  animateBg(0);
}
