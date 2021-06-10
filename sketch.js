
var snow,snowImg
var bgImg
var snow2,snowImg2

function preload() {
  snowImg = loadImage("snow4.webp");
  bgImg = loadImage("snow1.jpg");
  snowImg2= loadImage("snow5.webp");
}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bgImg);  
  drawSprites();
  createsnow();
  createsnow2();
}

function createsnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 50, 50);
  snow.velocityX = -1;
  snow.velocityY = 3;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  }
}

function createsnow2(){
  if(frameCount%10===0){
  snow2 = createSprite(random(0,800), 0, 50, 50);
  snow2.velocityX = -1;
  snow2.velocityY = 3;
  snow2.addImage(snowImg2);
  snow2.scale = 0.1;
  }
}