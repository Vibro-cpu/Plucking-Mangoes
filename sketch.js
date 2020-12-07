
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy

function preload()
{
	Boy = loadImage("sprites/boy.png")
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(200,625,20,20)
	boy.addImage(Boy)
	boy.scale = 0.1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	mango1 = new Mango(600,250,15)
	mango2 = new Mango(500,360,15)
	mango3 = new Mango(501,230,15)
	mango4 = new Mango(475,300,15)
	mango5 = new Mango(600,350,15)

	stone = new Stone(150,570,25)
	tree = new Tree(400,225,325,475)

	launcher = new Launcher(stone.body,{x:150, y:570})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill("white")
  text (mouseX+ ","+mouseY,mouseX,mouseY)

  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
  
  drawSprites();

  tree.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  launcher.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	launcher.fly();
	console.log("hi")
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:570})
		this.launcher.attach(stone.body);
	}
}

function detectcollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance <= lmango.r+lmango.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}