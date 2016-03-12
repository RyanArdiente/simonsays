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
var hourId= "";
var finalScoreObject = {};
var loseaudio = document.getElementById("loseaudio");
var greenaudio = document.getElementById("greenaudio");
var redaudio = document.getElementById("redaudio");
var yellowaudio = document.getElementById("yellowaudio");
var blueaudio = document.getElementById("blueaudio");
var timoutaudio = document.getElementById("timoutaudio");
var timequarteraudio = document.getElementById("timequarteraudio");
var timestartaudio = document.getElementById("timestartaudio");
var timetreequarteraudio = document.getElementById("timetreequarteraudio");
window.onload = function(){
  play();
  xhrTool("GET", "rest/getAllScores",updateTable);
}
  var keysPressed = function(e) {
     // store an entry for every key pressed
     keys[e.keyCode] = true;
     var w=87,a=65,s=83, q=81;
     if(keys[q] && ! keys[w] &&! keys[a] &&! keys[s])
     {
       green.setAttribute("class","greenOn");
       greenaudio.load();
       greenaudio.play();
     }
     if (! keys[q] &&  keys[w] && ! keys[a] && ! keys[s]) {
       red.setAttribute("class","redOn");
       redaudio.load();
       redaudio.play();
     }
     if (! keys[q] && ! keys[w] &&! keys[a] && keys[s]) {
       blue.setAttribute("class","blueOn");
       blueaudio.load();
       blueaudio.play();
     }
     if (! keys[q] && ! keys[w] && keys[a] &&! keys[s]) {
       yellow.setAttribute("class","yellowOn");
       yellowaudio.load();
       yellowaudio.play();
     }
   }
     function keysReleased(e) {
       off();
       var w=87,a=65,s=83, q=81;
       if(keys[q] && ! keys[w] &&! keys[a] &&! keys[s])
       {
         playerSequence.push(1);
       }
       if (! keys[q] &&  keys[w] && ! keys[a] && ! keys[s]) {
         playerSequence.push(2);
       }
       if (! keys[q] && ! keys[w] &&! keys[a] && keys[s]) {
         playerSequence.push(3);
       }
       if (! keys[q] && ! keys[w] && keys[a] &&! keys[s]) {
         playerSequence.push(4);
       }
         keys[e.keyCode] = false;
         conditionCheck();
     }
