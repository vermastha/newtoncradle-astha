
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
bob1= new Bob(300, 300);
bob2= new Bob(350, 300);
bob3= new Bob(400, 300);
bob4= new Bob(450, 300);
bob5= new Bob(500, 300);
roof=new Roof();
chain1= new Chain(bob1.body, roof.body, -100)
chain2= new Chain(bob2.body, roof.body, -50)
chain3= new Chain(bob3.body, roof.body, 0)
chain4= new Chain(bob4.body, roof.body, 50)
chain5= new Chain(bob5.body, roof.body, 100)

	//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(64);
  fill("white")
text ("Press arrow keys to see the magic", 300, 500)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();
 chain5.display();
  
 
}
function keyPressed(){
  if (keyCode===LEFT_ARROW){
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70, y: -70})
  }
  if (keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(bob5.body, bob5.body.position, {x:70, y: -70})
  }
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(bob2.body, bob2.body.position, {x:-70, y: -70})
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-70, y: -70})
   }
   if (keyCode===DOWN_ARROW){
    Matter.Body.applyForce(bob4.body, bob4.body.position, {x:70, y: -70})
    Matter.Body.applyForce(bob5.body, bob5.body.position, {x:70, y: -70})
   }

  }

