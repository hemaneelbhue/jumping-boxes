var canvas;
var music;

function preload(){
    music = loadSound("g.mp4");
}


function setup(){
    canvas = createCanvas(1000,800);

    //create 4 different surfaces
box1 = createSprite(145,700,200,20);
box1.shapeColor=("red");
box2 = createSprite(350,700,200,20);
box2.shapeColor=("green");
box3 = createSprite(555,700,200,20);
box3.shapeColor=("blue");
box4 = createSprite(760,700,200,20);
box4.shapeColor=("yellow");
ball = createSprite(500,400,20,20);
edges = createEdgeSprites()



    //create box sprite and give velocity
ball.velocityX=7;
ball.velocityY=-6;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edges);

if (ball.isTouching(box2)&&ball.bounceOff(box2)){
ball.shapeColor=("green")
music.play();
}
else if (ball.isTouching(box1)&&ball.bounceOff(box1)){
    ball.shapeColor=("red")
    music.play();
    }
    else if (ball.isTouching(box3)&&ball.bounceOff(box3)){
        ball.shapeColor=("blue")
        music.play();
        }
  
    else if (ball.isTouching(box4)&&ball.bounceOff(box4)){
            ball.shapeColor=("yellow")
            music.play();
            }
    //add condition to check if box touching surface and make it box
    drawSprites()
}
