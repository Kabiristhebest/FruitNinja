var knife;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var score;
var fruitGroup, fruit,fruit1Image,fruit2Image,fruit3Image,fruit4Image;
var fruitGroupl, fruitl,fruit1Imagel,fruit2Imagel,fruit3Imagel,fruit4Imagel;
var enemyGroup,monster,monsterImage,enemy;
var gameoverImage;
var knifesound,gme;
function preload(){
  knifeImage= loadImage("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  knifeImage= loadImage("sword.png");
  fruit1Imagel=loadImage("fruit1.png");
  fruit2Imagel=loadImage("fruit2.png");
  fruit3Imagel=loadImage("fruit3.png");
  fruit4Imagel=loadImage("fruit4.png");
  monsterImage= loadAnimation("alien1.png","alien2.png");
  gameoverImage= loadImage("gameover.png");
  knifesound=loadSound("knifeSwooshSound.mp3");
  gme=loadSound("gameover.mp3")
}
function setup(){
  createCanvas(600,600);
  
  //creating Knife
  knife=createSprite(40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.7;
  //fruits
  score = 0;
  //creating groups
  fruitGroup= createGroup();
  fruitGroupl= createGroup();
  enemyGroup= createGroup();
}



function draw(){
  background("lightblue");
  text("Score: "+ score, 500,50);
  
  if(gameState === PLAY){
    
  knife.y = World.mouseY;
  knife.x = World.mouseX;
  
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    knifesound.play();
    score=score+2;
  }  
  if(fruitGroupl.isTouching(knife)){
    fruitGroupl.destroyEach();
    knifesound.play();
    score=score+2;
  }  
  if(enemyGroup.isTouching(knife)){
    gme.play();
    gameState=END;
  }
    
  fruits(); 
  fruitsl(); 
  enemy();
  }
  else {
    fruitGroup.destroyEach();
    fruitGroupl.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    fruitGroupl.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    knife.addImage(gameoverImage);
    knife.x=200;
    knife.y=200;
  }
  drawSprites();
  
}
function fruits(){
  if(World.frameCount%120===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
    r=Math.round(random(1,4));
    if( r == 1){
      fruit.addImage(fruit1Image);
    }else if( r== 2){
      fruit.addImage(fruit2Image);
    }else if ( r==3){
      fruit.addImage(fruit3Image);
    }else if ( r==4){
      fruit.addImage(fruit4Image);
    }
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX = -(7 + 3* score/5)
    fruit.setLiftime=100;
    
    fruitGroup.add(fruit);
    
  }
}
function fruitsl(){
  if(World.frameCount%80===0){
    fruitl=createSprite(0,200,20,20);
    fruitl.scale=0.2;
    r=Math.round(random(1,4));
    if( r == 1){
      fruitl.addImage(fruit1Imagel);
    }else if( r== 2){
      fruitl.addImage(fruit2Imagel);
    }else if ( r==3){
      fruitl.addImage(fruit3Imagel);
    }else if ( r==4){
      fruitl.addImage(fruit4Imagel);
    }
    
    fruitl.y=Math.round(random(50,340));
    
    fruitl.velocityX = (7 + 3* score/5)
    fruitl.setLiftime=100;
    
    fruitGroupl.add(fruitl);
    
  }
}
function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation(monsterImage)
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}
