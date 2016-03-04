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
  yellow.setAttribute("class", "yellowOff")
  simon.appendChild(yellow);

}

function play(){
  simon.innerHTML="";
  var h3 = document.createElement("h3");
  h3.innerHTML="Let's play simon!";
  simon.appendChild(h3);
  var input = document.createElement("input");
  input.setAttribute("type", "button");
  input.setAttribute("value", "Play?");
  input.addEventListener("click", changeover)
  simon.appendChild(input);
}
function changeover(e){
  e.target.removeEventListener("click", changeover);
  createGameBoard();
  computerTurn();
}
function updateTable(data){
  tablebody.innerHTML = "";
  var json = JSON.parse(data);
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
    tablebody.appendChild(tr);
  }
}
