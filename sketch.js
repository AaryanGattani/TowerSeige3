
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;

function preload()
{
   IMGchange();
}

Score = 0 ;

function setup() {
	createCanvas(1400, 777);


	engine = Engine.create();
	world = engine.world;
  
  

  ground1 = new GROUND(770,650,400,16);
  ground2 = new GROUND(1100,400,250,16);
  Ground = new GROUND(100,757,2580,30);

  //PART-1
  box1 = new BOX3(650,549,60,60);
  box2 = new BOX3(710,549,60,60);
  box3 = new BOX3(770,549,60,60);
  box4 = new BOX3(830,549,60,60);
  box5 = new BOX3(890,549,60,60);
  
  box6 = new BOX2(700,423,60,60);
  box7 = new BOX2(760,423,60,60);
  box8 = new BOX2(820,423,60,60);
  
  box9 = new BOX(725,360,60,60);
  box10 = new BOX(785,360,60,60);
  
  box11 = new BOX6(620,612,60,60);
  box12 = new BOX6(680,612,60,60);
  box13 = new BOX6(740,612,60,60);
  box14 = new BOX6(800,612,60,60);
  box15 = new BOX6(860,612,60,60);
  box16 = new BOX6(920,612,60,60);
  
  box17 = new BOX4(675,486,60,60);
  box18 = new BOX4(735,486,60,60);
  box19 = new BOX4(795,486,60,60);
  box20 = new BOX4(855,486,60,60);
  
  box21 = new BOX5(750,297,60,60);

  //PART-2
  box22 = new BOX3(1010,360,60,60)
  box23 = new BOX3(1070,360,60,60)
  box24 = new BOX3(1130,360,60,60)
  box25 = new BOX3(1190,360,60,60)

  box26 = new BOX(1040,299,60,60);
  box27 = new BOX(1100,299,60,60);
  box28 = new BOX(1160,299,60,60);

  box29 = new BOX2(1065,236,60,60);
  box30 = new BOX2(1125,236,60,60);

  box31 = new BOX4(1090,173,60,60);


  polygon = Bodies.circle(100,200,100);
  World.add(world,polygon);
  
  slingshot = new SLING(polygon,{x:300,y:300},{isStatic : false},{restitution : 2},{fill : "White"});

}

function draw() {
  
  if(backgroundImg)
  {
      background(backgroundImg);
  }
  
  Engine.update(engine);
  
  
  ground1.display();
  ground2.display();
  Ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score(); 
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score(); 
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  
  
 ellipse(polygon.position.x,polygon.position.y,polygon.radius,polygon.radius);
  
  slingshot.display();
 
  drawSprites();

  textFont("Courier New");
  textSize(40);
  stroke("blue");
  fill("blue");
  text("Score : "+ Score,width-300,50);
  
}


function mouseDragged()
{
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32 ){
      Matter.Body.setPosition(polygon,{x:300,y:300});
      slingshot.attach(polygon);
    }
  }

  async function IMGchange()
{
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    JSONresponse = await response.json();
    jsondatetime = JSONresponse.datetime;
    hour = jsondatetime.slice(11,13);
    if(hour >= 18)
    {
        backgroundImg = loadImage("Night.jpg")
    }
    else
    {
        backgroundImg = loadImage("Day.jpg")
    }
  }
