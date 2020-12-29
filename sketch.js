//how to create a function
//pass the parameters(formal and actual parameters)
//how to create a library and use in the code
//return the boolean values(true and false)
//ctrl+s to save the file


var fixedRect, movingRect;
var o1,o2;
var wall1,wall2;

function setup() {
  createCanvas(1200,800);
  wall1=createSprite(600,100,80,10);
  wall2=createSprite(600,500,80,10);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true; //you will see the collider
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;//you will see the collider
  o1=createSprite(500,400,50,80);
  o1.shapeColor="green";
  o1.debug=true;
  o2=createSprite(400,400,50,80);
  o2.shapeColor="green";
  o2.debug=true;
  
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
// using isTouching function from the library created by us
 if(isTouching(movingRect,o1)){
    movingRect.shapeColor="red";
    o1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    o1.shapeColor="green";
  }
  if(isTouching(movingRect,o2)){
    movingRect.shapeColor="red";
    o2.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    o2.shapeColor="green";
  }

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  bounceOff(fixedRect,wall1);
  bounceOff(fixedRect,wall2);

  drawSprites();
}



