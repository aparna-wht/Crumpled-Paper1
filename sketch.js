
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var d1,d2,d3;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

// here, d1,d2,d3.. refers to the dustbins.

	//d1 = createSprite(1200,650);
	//d1.shapeColor = ("violet")

	//d2 = createSprite(570,650,170,20);
    //d2.shapeColor = ("violet");

	//d3 = createSprite(650,615,15,90);
	//d3.shapeColor = ("violet");

    dustbin = new Dustbin(1200,650);
    ground =  new Ground(width/2,670,width,20);
	
    paper = new Paper(200,450,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  dustbin.display();
  ground.display();
  //keypressed();
  //drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


