var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var partsReady
var particle

var gameState = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

//creatDivisions
   for (var k = 0; k <=width; k = k + 80) {
    divisions.push (new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//create plinko(dot);
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
   if(gameState == 0){
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }

   for (var k = 0; k < Divisions.length; k++) {
     
    divisions[k].display();
   }
   
  for (var k = 0; k < plinkos.length; k++) {
    
   plinkos[k].display();
  }

 
     if(particle != null){
        particle.display();
         if(particle.body.position.x<325){
            gameState = 1;
            text("Game Over",400,400);
            
      }else{
         score = score + 1;
      }
      }
      
}
}
function mousePressed (){
   if(gameState!== 1){
      particle = new Particle(mouseX,mouseY,10,10);
   }
}