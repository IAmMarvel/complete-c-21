//function to check collision between any two objects
//create two variables p1 and p2(p1 is touching the p2)
var p1,p2;
function isTouching(p1,p2){

  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
  return true;
 }
  else {
  return false;
 }

}