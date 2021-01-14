const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, division1, division2, division3, division4, division5, division6, division7;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,20);

  for(var k=0; k<= width; k=k+80){
    divisions.push(new Divisions(k,620,10,300));
  }
  for (var i = 40; i <= width; i = i+50){
    plinkos.push(new Plinko(i,75,10));
  }
  
  for (var i = 15; i<= width-10; i=i+50){
    plinkos.push(new Plinko(i,175,10));
  }

  
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for(var k=0; k< divisions.length; k++){
    divisions[k].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount% 60==0){
      particles.push(new Particle(random(width/2-30, width/2+30),0,10));
   }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
   }

}




  