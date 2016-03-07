var xhrTool = function(method,url, callback, object){
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status < 400)
  {
        if(method === "GET"){
        callback(xhr.responseText);
      }
      else{
        xhrTool("GET", "rest/getAllScores",updateTable);
      }
  }
};
  if(object !== null)
  {
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(object));
  }
  else{
    xhr.send(null);
  }

};
function scoreObject(score, name){
  this.score = score;
  this.name = name;
}
