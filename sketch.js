var car,wall
var speed,wight

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(750,200,50,200)
  speed = random(55,90);
  wight = random(400,1500)
}

function draw() {
  background(0);
 

  if(keyDown("space")){
    car.velocityX=speed;
  }
 
if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX=0;
  var defo = 0.5*wight*speed*speed/22500
  if(defo>100){
    car.shapeColor=color(225,0,0);
  }
  if(defo>180&&defo<100){
    car.shapeColor=color(230,230,0)
  }
  if(defo<100){
    car.shapeColor=color(0,225,0)
  }
}  
  drawSprites();
}