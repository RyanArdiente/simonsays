function startClock(){
  timestartaudio.load();
  timestartaudio.play();
  hourId = setInterval(function(){
    if(time == 0){
      clearInterval(hourId);

    }
    seconds.innerHTML = --time;
  }, 1000);
  clockCheck();
}
function clockCheck(bool){
  var checkid = setInterval(function(){
    if(bool){
      clearInterval(checkid);
    }
    if(time == 45 || time == 30){
      timethreequarteraudio.load();
      timethreequarteraudio.play();
    }else if(time == 15)
    {
      timequarteraudio.load();
      timequarteraudio.play();
    }
    else if(time == 0){
      clearInterval(checkid);
      off();
      timeoutaudio.load();
      timeoutaudio.play();

      finalScoreObject.score = "";
      finalScoreObject.name="";
      if(round.innerHTML > 5){
          finalScoreObject.score = score.innerHTML;
      }

      play("Time has expired Play Again!", finalScoreObject);
      stopClock();
      restartClock();
      resetGameState();
    }
  }, 1000);
}
function stopClock(){
  clearInterval(hourId);
  clockCheck(true);
}
function restartClock(){
  time = 60;
  seconds.innerHTML= "60";
}
