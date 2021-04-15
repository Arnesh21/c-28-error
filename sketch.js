
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var baground;

function preload()
{
   baground = loadImage("bg.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObject=new ground(width/2,700,width,15);
	stone = new Stone(400,300);
  mango = new Mango(200,200);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(baground);
  
  stone.display();
  groundObject.display();
  mango.display();

  drawSprites();
 
}



