
  var keysPressed = function(e) {
     // store an entry for every key pressed
     keys[e.keyCode] = true;
     var w=87,a=65,s=83, q=81;
     if(keys[q] && ! keys[w] &&! keys[a] &&! keys[s])
     {
       green.setAttribute("class","greenOn");

     }
     if (! keys[q] &&  keys[w] && ! keys[a] && ! keys[s]) {
       red.setAttribute("class","redOn");

     }
     if (! keys[q] && ! keys[w] &&! keys[a] && keys[s]) {
       blue.setAttribute("class","blueOn");

     }
     if (! keys[q] && ! keys[w] && keys[a] &&! keys[s]) {
       yellow.setAttribute("class","yellowOn");

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
     function off(){

                 green.setAttribute("class","greenOff");

                 red.setAttribute("class","redOff");

                 blue.setAttribute("class","blueOff");

                 yellow.setAttribute("class","yellowOff");

     }
