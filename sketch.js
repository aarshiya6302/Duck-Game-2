const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,600);
  ground=new Ground(400,590,800,20)
  
 

  section1=new Ground(200,200,300,10)  
  section2=new Ground(650,550,300,60)
  section3=new Ground(485,565,30,30)
  section4=new Ground(650,200,150,20)
  section5=new Ground(790,270,20,1000)
  section6=new Ground(400,-380,800,300)
  
  duck= new Duck(20,535)

  //key=new Key(650,150);

  
}

function draw() {
  background(0);  

 Engine.update (engine);
  if(duck.body.position.y<100){
    camera.position.y=duck.body.position.y; 
  }

  if(keyDown(RIGHT_ARROW)){
    duck.body.position.x=duck.body.position.x+10
    //Matter.Body.setStatic(duck.body,false);
  }

  if(keyDown(LEFT_ARROW)){
    duck.body.position.x=duck.body.position.x-10
  }

  if(keyDown(UP_ARROW)){
    duck.body.position.y=duck.body.position.y-30
  }
  //duck.body.position.y=duck.body.position.y+6

  if(duck.body.position.y>200){
    Matter.Body.setStatic(duck.body,false);
  }
  
  section1.display();
  section2.display();
  section3.display();
  section4.display();
  section5.display();
  section6.display();
  

  duck.display();
  ground.display();
  detectollision(duck,section1);
}

function detectollision(lduck,plat){
	
  platBodyPosition=plat.body.position
  duckBodyPosition=lduck.body.position
  
  var distance=dist(duckBodyPosition.x, duckBodyPosition.y, platBodyPosition.x, platBodyPosition.y)
  
  	if(distance<=plat.r+lduck.r)
    {
      
  	  Matter.Body.setStatic(duck.body,true);
    }
    console.log("hi")
  }
