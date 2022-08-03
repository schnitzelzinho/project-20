
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}

	var block1_options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var block2_options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	
	var block3_options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}

	Engine.run(engine);
  
	fill("lightgreen");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	block1 = Bodies.circle(220,25,25,block1_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,50,25,block2_options);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,25,25,block3_options);
	World.add(world,block3);

	ground = Bodies.rectangle(400,650,800,50,plane_options);
	World.add(world,ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  ellipse(block1.position.x,block1.position.y,25,25);
  rect(block2.position.x,block2.position.y,25,25);
  rect(block3.position.x,block3.position.y,50,25);
  rect(ground.position.x,ground.position.y,800,50);
}