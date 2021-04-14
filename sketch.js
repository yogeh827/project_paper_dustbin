
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var paper1;
var ground;
var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =createSprite(600,360,1200,15);
	//paper1	=  Matter.Bodies.circle(400,350,15,10);
	wall1 = new Dustbin (305,565,10,100);
	 wall1.isStatic=true
	 //wall1.shapeColor = "red";
	 wall2 = new Dustbin (505,565,10,100);
	 wall1.isStatic = true
	 wall3 = new Dustbin (400,590,200,10);
	 wall3.isStatic = true
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //paper1.display();
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
  drawSprites();
 
}



