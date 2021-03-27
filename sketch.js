
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rope1,rope2,rope3,rope4,rope5,bg;

function preload()
{
	bg=loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1=new Bob(300,350,50);
    bob2=new Bob(350,350,50);
    bob3=new Bob(400,350,50);
    bob4=new Bob(450,350,50);
    bob5=new Bob(500,350,50);



	roof=new Roof(400,100,300,40);

	rope1=new Rope(bob1.body,roof.body,-50*2,0)
	rope2=new Rope(bob2.body,roof.body,-25*2,0)
	rope3=new Rope(bob3.body,roof.body,0*2,0)
	rope4=new Rope(bob4.body,roof.body,25*2,0)
	rope5=new Rope(bob5.body,roof.body,50*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
  fill("black");
  textSize(18);
  textFont("italic")
  text("Press the following key to change the color of the bob",240,500);
  textFont("algerian");
  textSize(35);
  fill("orange")
  text("A=green",240,530);
  fill("black");
  text("SPACEBAR=blue",240,560);
  fill("cyan");
  text("K=yellow",240,590);



   fill("grey");
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites(); 
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 

