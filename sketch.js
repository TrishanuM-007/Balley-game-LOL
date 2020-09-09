const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var start
var name1
var name2
var balley
var l1
var l2 
var l3
var l4
var collision
var engine, world;
var flag = 0

 var gameState = "start"
 var plat15
 var balley1
 var slant1
 //var block = 0
 



function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
 start = createSprite(400,500,200,50);
 name1 = createSprite(250,150,375,200);
 name2 = createSprite(550,275,375,200);
 inst = createSprite(400,575,300,50);
start.shapeColor = "Orange"
name1.shapeColor = "#DC143C"
name2.shapeColor = "#DC143C"
inst.shapeColor = "Orange"
balley = new Balley(20,30);
 falley = new Circle(420,700);
plat1 = new Ground(20,100,100,10)
  plat2  = new Ground(350,100,600,10);
 plat3 = new Ground(200,82,30,30);
 plat4 = new Ground(600,150,1100,10);
 plat5 = new Ground(20,300,45,20);
 plat6 = new Ground(20,400,1450,10);
 plat7 = new Ground(250,200,10,100);
 plat8 = new Ground(250,350,10,100);
plat9 = new Ground(400,300,10,200);
 plat10 = new Ground(20,300,45,20);
 plat11 = new Ground(550,250,10,200);
 plat12 = new Ground(600,600,500,10);
 plat13 = new Ground(350,670,10,150);
 plat14 = new Ground(420,750,150,10);
 
 
}
//if(flag === 3 && gameState === "play2"){
   // plat15 = new Ground(400,50,200,10);
    //}   



function draw(){
    background(backgroundImg);
    Engine.update(engine);
   
    
    if(gameState === "start"){
        
    drawSprites();
    textSize(25);
fill("black")
    text("START",360,510);
    text("HOW TO PLAY",315,585)
    fill("yellow")
    textSize(100)
    text("Balley",100,175);
    text("Game",410,310)
    if(mousePressedOver(start)){
        gameState = "play"
        //balley.body.position.x = 20
        //balley.body.position.y = 30
    }
    //if(mousePressedOver(start) && flag === 2){
        //gameState = "play2"
       // flag = 3
        //block = 1
    //    
    //}
    if(mousePressedOver(inst)){
        gameState = "inst"
        
    }
    }
    

    
   
    if(gameState === "play"){
        for(i=0;i<300;i=i+50){
            triangle(i+25,150,i+50,125,i+90,150);
            console.log("hi");
          }
        

//textSize(90)
//text("hi",200,200)

        balley.display()
        plat1.display()
        plat2.display()
        plat3.display();
        plat4.display()
        plat5.display()
        plat6.display()
        plat7.display()
        plat8.display()
        plat9.display()
        plat10.display()
        plat11.display()
        plat12.display()
        plat13.display()
        plat14.display()
        falley.display()
        
        collision = Matter.SAT.collides(balley.body,falley.body)
        if(collision.collided){
           // textSize(30)
          // text("LEVEL COMPLETE",250,500);
          flag = 1
          myFunction();
         // alertFunc();
           
        }
        if(flag === 1){
       
        fill("Blue")
            textSize(30)
           text("LEVEL COMPLETE",250,500);
          
          
         
           
        }
        if(keyWentDown("r")){
            gameState = "start"
            flag = 0
        }
        
       
       
    }
    
        
    if(gameState === "play2"){
   flag = 3
  console.log(mouseX)
    for(i=0;i<160;i=i+50){
        triangle(i+25,500,i+47,460,i+70,500);
        //console.log("hi");
      }
      for(i=0;i<200;i=i+50){
        triangle(i+575,500,i+597,460,i+620,500);
        //console.log("hi");
      }
     plat15 = new Ground(400,50,300,10);
     plat16 = new Ground(250,145,10,200);
     plat17 = new Ground(550,145,10,200);
     plat18 = new Ground(250,400,10,200);
     plat19 = new Ground(550,400,10,200);
     plat20 = new Ground(400,275,10,400);
     plat21 = new Ground( 100,175,100,20);
     plat22 = new Ground(700,175,100,20);
     balley1 = new Balley(100,150);
     falley1 = new Circle(700,150)
        plat15.display();
       // balley.display()
        World.remove(world,plat13.body);
       // World.remove(world,plat14.body);
        World.remove(world,plat12.body);
        World.remove(world,plat11.body);
        plat16.display()
        plat17.display()
        plat18.display();
        plat19.display();
        plat20.display();
        plat21.display();
        plat22.display();
        falley1.display();
      

      
        balley1.display();
        if(keyWentDown("r")){
            gameState = "start"
            flag = 2
        }
        
    } 
    if(gameState === "inst"){
        fill("red");
        textSize(50);
        text("INSTRUCTIONS",225,100);
        fill("blue")
        textSize(25)
        text("Press arrow keys to push the ball and space once to make the ball jump",5,150);
        text("Press spacebar multiple times to fly",200,200);
        text("Reach Balley's friend Falley to complete the levels",125,250);
        text("Touching Spikes or falling out off the map kills balley",120,300);
        fill("red")
        textSize(40)
        text("BEST OF LUCK !",270,400);
        textSize(23)
        text("(Press 'R' to go back)",325,450);
        if(keyWentDown("r")){
            gameState = "start"
            flag = 0
        }

    }
       

    }
   
    

function keyPressed() {
    if (keyCode === RIGHT_ARROW && gameState === "play" ) {
       Matter.Body.applyForce( balley.body, {x: balley.body.position.x, y: balley.body.position.y}, {x: 0.01, y: 0});
  console.log("right")
    }
    if (keyCode === LEFT_ARROW && gameState === "play") {
        Matter.Body.applyForce( balley.body, {x: balley.body.position.x, y: balley.body.position.y}, {x: -0.01, y: 0});
    console.log("left")
     }
     if (keyCode === 32 && gameState === "play") {
        Matter.Body.applyForce( balley.body, {x: balley.body.position.x, y: balley.body.position.y}, {x: 0, y: -0.01});
     
     }
     if (keyCode === RIGHT_ARROW &&  gameState === "play2") {
        Matter.Body.applyForce( balley1.body, {x: balley1.body.position.x, y: balley1.body.position.y}, {x: 0.01, y: 0});
   console.log("right")
     }
     if (keyCode === LEFT_ARROW &&  gameState === "play2") {
         Matter.Body.applyForce( balley1.body, {x: balley1.body.position.x, y: balley1.body.position.y}, {x: -0.01, y: 0});
     console.log("left")
      }
      if (keyCode === 32 && gameState === "play2") {
         Matter.Body.applyForce( balley1.body, {x: balley1.body.position.x, y: balley1.body.position.y}, {x: 0, y: -0.01});
      
      }
     
    
   
     
   
   


}
function myFunction() {
    myVar = setTimeout(reGame,5000);
}
function reGame() {
   gameState = "play2"
   flag = 2
   
   
   
  }

  //if(mousePressedOver(start) && flag === 2){
    //gameState = "play2"
    //flag = 3
   // block = 1
  // } 


