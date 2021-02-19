var Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var particle;
var turn = 0;

var play = 1;
var end = 0;
var gameState = "play";

var engine, world;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(20);
  text("500",23,550);

  textSize(20);
  text("500",103,550);

  textSize(20);
  text("500",183,550);

  textSize(20);
  text("500",263,550);

  textSize(20);
  text("100",343,550);

  textSize(20);
  text("100",423,550);

  textSize(20);
  text("100",503,550);

  textSize(20);
  text("200",583,550);

  textSize(20);
  text("200",663,550);

  textSize(20);
  text("200",743,550);

  Engine.update(engine);

  ground.display();

  if(gameState === "end") {
    textSize(50);
    text("GAME OVER",400,400);
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(particle!=null) {

    particle.display();

    if(particle.body.position.y > 760) {

     if(particle.body.position.x < 300) {
       score = score + 500;
       particle = null;
       if(turn >= 5) gameState = "end";
     }

     else if(particle.body.position.x > 301 && particle.body.position.x < 600) {
      score = score + 100;
      particle = null;
      if(turn >= 5) gameState = "end";
     }

     else if(particle.body.position.x > 601 && particle.body.position.x < 900) {
      score = score + 200;
      particle = null;
      if(turn >= 5) gameState = "end";
     }
    }
  }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

}

function mousePressed()
{
  if(gameState !== "end") 
  {
    turn = turn+1;
    particle = new Particle(mouseX,10,10,10);
  }
}