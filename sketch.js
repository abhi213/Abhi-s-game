var bird, birdImage;
var  bg, bgImage;
function preload(){
  birdImage = loadImage("bird.png");
  bgImage = loadImage("background.jpg");

}

function setup(){
  createCanvas(1000, 600);

  bg = createSprite(500, 300, 1000, 600);
  bg.addImage(bgImage);
  bg.scale = 2;
  bg.velocityX = -5;
  bird = createSprite(50, 300, 10, 10);
  bird.addImage(birdImage);
  bird.scale = 0.2;

}

function draw(){
  background(0);
  if(keyDown("UP_ARROW")){
      bird.velocityY = -5;
  }
  bird.velocityY = bird.velocityY + 0.5; 
  if(bg.x < 0){
      bg.x = 3*bg.width/2;
  }
  console.log(40*30/4+2-12+3);
  drawSprites();
}