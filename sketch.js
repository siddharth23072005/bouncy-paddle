var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  paddle = createSprite(390,150,15,90);
ball = createSprite(200,200,30,30);
  ball.velocityX = 2;
  ball.velocityY = 2
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */ 
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
background(100,150,255);

  /* create Edge Sprites here */
 edges =  createEdgeSprites();
 
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leav9ing the right edge of the canvas to be open. */

  ball.bounceOff(edges[0]);
 ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
   ball.bounceOff(paddle);
ballImage = loadImage("ball.png");
paddleImage = loadImage("paddle.png");
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyWentDown("w"))
  {
    paddle.velocityY = -5
  }
  if(keyWentUp("w")){
     paddle.velocityY = 0;
     }
  
  if(keyWentDown("s")){
  
    paddle.velocityY = 5;
  }
  if(keyWentUp("s")){
  paddle.velocityY = 0;
  }
  if(paddle.y<0,paddle.y>400){
  paddle.y = 200;
    paddle.x = 400;
  }
 // randomVelocity1();
//randomVelocity2();
  drawSprites();
  
}

