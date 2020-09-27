const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,tree,boy1,stone;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tree = new Tree(0,0);
    mango1 = new Mango(700,180,15);
    mango2 = new Mango(762,100,15);
    mango3 = new Mango(850,150,15);
    mango4 = new Mango(710,125,15);
    mango5 = new Mango(800,126,15);
    mango6 = new Mango(750,150,15);
    mango7 = new Mango(850,100,15);
    mango8 = new Mango(950,150,15);
    mango9 = new Mango(900,100,15);
    mango10 = new Mango(800,70,15);
    boy1 = new Boy(0,0);
    stone = new Stone(160,300,15);
    chain = new Slingshot(stone.body,{x:117,y:250});
}

function draw(){
    console.log(mouseY);
    background("blue");
    Engine.update(engine);
    ground.display();
    boy1.display();
    tree.display();
    mango1.display(); 
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    stone.display();
    chain.display();

    detectcollision(mango1,stone);
    detectcollision(mango2,stone);
    detectcollision(mango3,stone);
    detectcollision(mango4,stone);
    detectcollision(mango5,stone);
    detectcollision(mango6,stone); 
    detectcollision(mango7,stone); 
    detectcollision(mango8,stone);
    detectcollision(mango9,stone);
    detectcollision(mango10,stone);

}
function mouseDragged(){
    
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    chain.fly();
}
function detectcollision(bodyA,bodyB){
   var mangoBodyPosition=bodyA.body.position;
   var stoneBodyPosition=bodyB.body.position;

   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

   if(distance<=bodyA.radius+bodyB.radius)
   {
     Matter.Body.setStatic(bodyA.body,false);
   }


}


function keyPressed(){
if(keyCode===32){
chain.attach(stone.body);

}

}
