const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;

function preload(){
  bg = loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(bg); 
  spawnSnow(); 
  drawSprites();
}
function spawnSnow(){
  if(frameCount % 50 === 0){
    var snow = new Snow(Math.round(random(5, 695)))
    snow.lifetime = 1000; 
  }
}