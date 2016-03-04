function computerTurn(){
  window.removeEventListener("keydown",keysPressed, false);
  window.removeEventListener("keyup",keysReleased, false);
  roundnum++;
  round.innerHTML = roundnum;
  var move = moveGenerator();
  computerSequence.push(move);
  movetimer = 0;
  var flashtimer = 0;
  var flashinterval = setInterval(function(){
    switch (computerSequence[movetimer]) {
      case 1:
         green.setAttribute("class","greenOn");
        break;
      case 2:
        red.setAttribute("class","redOn");
        break;
      case 3:
        blue.setAttribute("class","blueOn");
        break;
      case 4:
        yellow.setAttribute("class","yellowOn");
        break;
    }
    var flash = setTimeout(function(){
        off();
        clearTimeout(flash);
    }, 500);
      if(movetimer === computerSequence.length){
        clearInterval(flashinterval);
        off();
      }
        movetimer++;
    }, 1000);
    playerSequence =[];
    window.addEventListener("keydown",keysPressed, false);
    window.addEventListener("keyup",keysReleased, false);
}
function conditionCheck(){
  var gameLost = false;
  for (var i = 0; i < playerSequence.length; i++) {
    if(computerSequence[i] == playerSequence[i]){
      if(i % 10 !== 0){
        totalScore+= defScore*2;
      }
      else{
        totalScore += defScore;
      }

      score.innerHTML = totalScore;
      continue;
    }
    else{
      play();
      gameLost = true;
      break;
    }
  }

  if(computerSequence.length == playerSequence.length)
  {
    Round+=1;
    computerTurn();
  }
  else if(playerSequence.length > computerSequence.length)
  {
    gameLost = true;
  }
  if(gameLost === true){
    resetGameState();
    if(round.innerHTML > 5){
      var playerName = prompt("You Lost! Score: " + score.innerHTML +  " Round: " + round.innerHTML + ". Please enter your initials.").toUpperCase();
      var newScore = new scoreObject(score.innerHTML, playerName.substring(0,3));
      xhrTool("PUT", "rest/createScore", updateTable, newScore);
    }
    else{
      alert("You Lost! Please Play Again.");
    }
    play();
  }
}
function resetGameState(){
  computerSequence= [];
  playerSequence = [];
  totalScore = 0;
  roundnum = 0;
  gameLost = false;
}
function moveGenerator(){
  return Math.floor((Math.random() * 4) + 1);
}
