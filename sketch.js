var gameobject1;
var gameobject2;

function setup() {

  createCanvas(800,600);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(400,400,80,30);

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "yellow";

  movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;

}

function draw() {

  background(255,255,255);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "purple";
  }else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  
   bounceOff(movingRect,gameObject4);

  

  drawSprites();
}

