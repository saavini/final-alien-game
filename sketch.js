
var alien1 ,alien;
var seed1 ,seed2;
var laser1,laser2;
var edge;
var case2;
var case1;
var bg1,bg2;
var edge;

function preload()
{
alien1=loadImage("images/alien.png");
seed1=loadImage("images/seed.png");
bg1=loadImage("images/bg.jpg");
}
function setup()
{
  createCanvas(600,500);
  
  bg2=createSprite(200,200,200,400);
  bg2.addImage(bg1)
  bg2.scale=3.5;
  
  laser1=createSprite(80,350,300,8);
  laser1.velocityY = -2.6
  laser1.shapeColor="magenta"
 
  laser2=createSprite(450,70,300,8);
  laser2.velocityY=2.6
  laser2.shapeColor="magenta"
 
  alien = createSprite(550,450,20,20)
  alien.addImage(alien1)
  alien.scale=0.7;

  alien.setCollider("circle",0,0,35);
 
  seed2=createSprite(50,50,20,20)
  seed2.addImage(seed1)
  seed2.scale=0.3
  

  case1=createSprite(100,50,3,100)
  case1.shapeColor="white";
  
  case1.setCollider("circle",20,0,20)

  case2=createSprite(50,105,100,3)
  case2.shapeColor="white";

}

  
  function draw(){
    
    background("bg2");
    edge =createEdgeSprites();
    laser1.bounceOff(edge);
    laser2.bounceOff(edge);
    alien.collide(edge);
    
    
    if (keyDown(UP_ARROW)) {
      alien.velocityX=0;
      alien.velocityY=-3;
     }
     if (keyDown(DOWN_ARROW)){
      alien.velocityX=0;
      alien.velocityY=3;
     }
     if (keyDown(LEFT_ARROW)) {
       alien.velocityX=-3;
       alien.velocityY=0;
     }
     if (keyDown(RIGHT_ARROW)) {
       alien.velocityX=3;
       alien.velocityY=0;
     }


       drawSprites()
       
       if (alien.isTouching(laser1) || alien.isTouching(laser2)){
        laser1.velocityX=0;
        laser1.velocityY=0;
        laser2.velocityX=0;
        laser2.velocityY=0;
        alien.velocityX=0;
        alien.velocityY=0;
        textSize(20);
        fill ("cyan");
        stroke(3)
        strokeWeight(12)
        text("ALIEN IS CAUGHT ",200,250);
        text("{Press SPACE KEY to restart} ",150,300)
      }
       if(alien.isTouching(case1)||alien.isTouching(case2) ){
           laser1.velocityX=0;
        laser1.velocityY=0;
        laser2.velocityX=0;
        laser2.velocityY=0;
        alien.velocityX=0;
        alien.velocityY=0;
       textSize(20);
       stroke(3)
       strokeWeight(12)
        fill ("cyan");
        text("YOU WIN ",250,260);
        text( " {Press SPACE KEY to restart}" ,160,300)
       }

       if(keyDown("SPACE")){
         alien.x=550;
         alien.y=450;
         alien.velocityX=0;
         alien.velocityY=-0;
         
         laser1.velocityX=0;
         laser1.velocityY=2.6;
         laser2.velocityX=0;
         laser2.velocityY=-2.6;
       }
}
