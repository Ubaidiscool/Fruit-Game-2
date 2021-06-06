const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var knife
var fruits = []
var bombs = []
var i = 0
var j = 0
var woddenBoard
var fruitsGroup,BombGroup
var fruitsTry,bombsTry

function preload(){
  
 
  woddenBoard = loadImage ("sprites/Wodden Background.png")
}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    knife = new Knife (200,200,50,50);
    fruitsTry=new Fruits(200,200)
    bombsTry = new Bomb(200,200)
    
    fruitsGroup = new Group()
    BombGroup = new Group()
}

function draw(){
    background(woddenBoard);
   
    knife.x = World.mouseX;
    knife.y = World.mouseY;
    knife.display(); 
    //fruitsTry.display();
    Engine.update(engine);
    bombsTry.display();
    //spawnFruits()
    //spawnBombs()
}

function spawnFruits(){
    if (frameRate%100 === 0){
        fruits[i]=new Fruits(200,200);
        fruits[i].display();
        i = i + 1;
        fruitsGroup.add(fruits[i]);
    }
}

function spawnBombs(){
    if (frameRate%100 === 0){
        bombs[j]=new Bomb(200,200); 
        bombs[j].display();
        BombGroup.add(bombs)
        j = j + 1;
    }
}