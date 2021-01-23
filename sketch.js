var floor, base1;

var red1, red2, red3, red4, red5, red6, red7;
var blue1, blue2, blue3, blue4, blue5;
var yellow1, yellow2, yellow3;
var green1;

var polygon;

var sling;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload(){

}

function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    floor = new Ground(250, 490, 500, 10);
    base1 = new Ground(250+100, 400, 200, 10);

    red1 = new Block(220+100,390,"red");
    red2 = new Block(230+100,390,"red");
    red3 = new Block(240+100,390,"red");
    red4 = new Block(250+100,390,"red");
    red5 = new Block(260+100,390,"red");
    red6 = new Block(270+100,390,"red");
    red7 = new Block(280+100,390,"red");

    blue1 = new Block(230+100,350,"blue");
    blue2 = new Block(240+100,350,"blue");
    blue3 = new Block(250+100,350,"blue");
    blue4 = new Block(260+100,350,"blue");
    blue5 = new Block(270+100,350,"blue");

    yellow1 = new Block(240+100,320,"yellow")
    yellow2 = new Block(250+100,320,"yellow")
    yellow3 = new Block(260+100,320,"yellow")

    green1 = new Block(250+100,280,"lime");

    polygon = new Polygon(25,475);

    SlingMain = new SlingShot(polygon.body,{x:100,y:400})
}

function draw(){
    background(0);
    Engine.update(engine);

    floor.display();
    base1.display();

    red1.display();
    red2.display();
    red3.display();
    red4.display();
    red5.display();
    red6.display();
    red7.display();

    blue1.display();
    blue2.display();
    blue3.display();
    blue4.display();
    blue5.display();

    yellow1.display();
    yellow2.display();
    yellow3.display();

    green1.display();

    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    SlingMain.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 100, y: 400})

        SlingMain.attach(polygon.body);
        
    }
}