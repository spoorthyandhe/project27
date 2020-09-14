
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rope,bob;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,200,600,50)
	bob1= new Bob(200,300,100,100,500);
	bob2= new Bob(300,300,100,100,500);
	bob3= new Bob(400,300,100,100,500);
	bob4= new Bob(500,300,100,100,500);
	bob5= new Bob(600,300,100,100,500);
	Engine.run(engine);

	rope1=Rope(bob1.body,roof.body-bob*2,0)
	rope2=Rope(bob2.body,roof.body-bob*2,0)
	rope3=Rope(bob3.body,roof.body-bob*2,0)
	rope4=Rope(bob4.body,roof.body-bob*2,0)
	rope5=Rope(bob5.body,roof.body-bob*2,0)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


 roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
}



