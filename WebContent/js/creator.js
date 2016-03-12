function createGameBoard(){
  simon.innerHTML="";
  var red = document.createElement("div");
  red.setAttribute("id", "red");
  red.setAttribute("class", "redOff")
  simon.appendChild(red);
  var green = document.createElement("div");
  green.setAttribute("id", "green");
  green.setAttribute("class", "greenOff")
  simon.appendChild(green);
  var blue = document.createElement("div");
  blue.setAttribute("id", "blue");
  blue.setAttribute("class", "blueOff")
  simon.appendChild(blue);
  var yellow = document.createElement("div");
  yellow.setAttribute("id", "yellow");
  yellow.setAttribute("class", "yellowOff");
  simon.appendChild(yellow);
  clock.style.textShadow ="0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff9900 , 0 0 70px #ff0000 , 0 0 80px #ff0000 , 0 0 100px #ff9900";
  clock.style.backgroundColor = "black";
  clock.style.color = "white";
}
function off(){
   green.setAttribute("class","greenOff");
   red.setAttribute("class","redOff");
   blue.setAttribute("class","blueOff");
   yellow.setAttribute("class","yellowOff");
   // yellowaudio.pause();
   // redaudio.pause();
   // greenaudio.pause();
   // blueaudio.pause();

}

function play(gameloss, finalScoreObject){
  simon.innerHTML="";
  var h1 = document.createElement("h1");
  if(gameloss){
    h1.innerHTML+=gameloss+"</br>";
    if(finalScoreObject.score){
      simon.innerHTML+="<input type=\"text\" maxlength=\"3\" id=\"initials\"><input type=\"button\" value=\"Submit\" id=\"initalsubmit\">";
      initalsubmit.addEventListener("click",submitscore);


    }
  }
  h1.innerHTML+="Click To Here To Start!<br> Q = Green | W = Red <br> A = Yellow | S = Blue";
  h1.id = "playSimonSign";
  clock.style.textShadow ="";
  clock.style.color = "black";

  simon.appendChild(h1);
  h1.addEventListener("click", changeover);
  clock.style.backgroundColor = "black";
  createAudio();
}
function changeover(e){
  e.target.removeEventListener("click", changeover);
  createGameBoard();
  computerTurn();
}
var submitscore = function(){
  finalScoreObject.name = initials.value || "ANO";
  initalsubmit.removeEventListener("click", submitscore);

    xhrTool("PUT", "rest/createScore", updateTable, finalScoreObject);
}
function updateTable(data){
  scoreTable.innerHTML = "";
  var json = JSON.parse(data);
  var thead = document.createElement("thead");
  scoreTable.appendChild(thead);
  var thr = document.createElement("tr");
  var thnames = ["Rank", "Name", "Score"];
  for (var j = 0; j < thnames.length; j++) {
    var th = document.createElement("th");
    th.innerHTML = thnames[j];
    thr.appendChild(th);
  }
  thead.appendChild(thr);
  var tbody = document.createElement("tbody");
  tbody.id = "tablebody";
  for (var i = 0; i < 10; i++) {

      if(data.length === i){
        break;
      }
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = i + 1;
    tr.appendChild(td1)
    for (var key in json[i]) {
        if(key == "id"){
          continue;
        }
        var td = document.createElement("td");
        td.innerHTML=json[i][key];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    scoreTable.appendChild(tbody);
  }
}
