const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var background;
var ground;
var c1,c2,c3,c4,c5,c6;
var chain1;
var rock;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  c1 = new Coach (50,150,50,50);
  c2 = new Coach (150,150,50,50);
  c3 = new Coach (250,150,50,50);
  c4 = new Coach (350,150,50,50);
  c5 = new Coach (450,150,50,50);
  c6 = new Coach (550,150,50,50);

  rock = new Rock (1100,200,100,100);

  chain1 = new Chain (c1.body,c2.body)
  chain2 = new Chain (c2.body,c3.body)
  chain3 = new Chain (c3.body,c4.body)
  chain4 = new Chain (c4.body,c5.body)
  chain5 = new Chain (c5.body,c6.body)


}

function draw() {
  background(bg);  
  Engine.update(myEngine);

 
  c1.show();
  c2.show();
  c3.show();
  c4.show();
  c5.show();
  c6.show();

  rock.show();

  chain1.show();
  chain2.show();
  chain3.show();
  chain4.show();
  chain5.show();



  }

  
