const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1;
var log2,bird, log3, log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    pig1 = new Pig(800,200);
    ground = new Ground(600,height,1200,20)
    log1 = new Log(800,200, 300, PI/2)
    log2 = new Log(800, 50, 300, PI/2)
    pig2 = new Pig(800, 300)
    box3 = new Box(700, 100, 70,70);
    box4 = new Box(900, 100, 70,70);
    bird = new Bird(200,100);
    box5 = new Box(800,10,70,70)
    log3 = new Log(780,5, 150, PI/7)
    log4 = new Log(820, 5,150, PI/-7)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground.display();
   pig1.display();
   log1.display();
   log2.display();
   pig2.display();
   box3.display();
   box4.display();
   bird.display();
   box5.display();
   log3.display();
   log4.display();
}