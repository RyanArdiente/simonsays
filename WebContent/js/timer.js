var time = 60;
var timerId= "";
var minute = 60000;
var second = 10;
var keys = [];
var computerSequence= [];
var playerSequence= [];
var moveInterval = "";
var movetimer = 0;
var totalScore = 0;
var defScore = 100;
var roundnum = 0;
window.onload = function(){


  play();
  xhrTool("GET", "rest/getAllScores",updateTable);
}
function start(){
  button.removeEventListener("click", start);
  button.value ="Stop Timer";
  button.addEventListener("click", restart);
  hourId = setInterval(function(){
    if(time == 0){
      seconds.innerHTML = "60";
      time = 60;
    }
    seconds.innerHTML = --time;
  }, 1000);

}
function restart(){
  clearInterval(hourId);
  button.removeEventListener("click", restart);
  button.value = "Start/Resume";
  button.addEventListener("click", start);
}
function reset(){
  time = 0;
  seconds.innerHTML= "0";
  minutes.innerHTML = "0";
}
