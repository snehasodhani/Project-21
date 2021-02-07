var canvas;
var music;
var surface1,surface2,surface3,surface3,box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(80,587,180,30);
surface1.shapeColor="green";

surface2=createSprite(290,587,180,30);
surface2.shapeColor="orange";

surface3=createSprite(500,587,180,30);
surface3.shapeColor="pink";

surface4=createSprite(700,587,180,30);
surface4.shapeColor="yellow";

box=createSprite(random(20,750),200,30,30);
box.velocityX=4;
box.velocityY=4;
box.shapeColor="white"



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);

if(box.isTouching(surface1)){
    box.shapeColor="green";
    box.bounceOff(surface1);
    music.play();
}
if(box.isTouching(surface2)){
    box.shapeColor="orange";
    
    box.velocityX=0;
    box.velocityY=0;

}
if(box.isTouching(surface3)){
    box.shapeColor="pink";
    box.bounceOff(surface3);
    music.play();

}
if(box.isTouching(surface4)){
    box.shapeColor="yellow";
    box.bounceOff(surface4);
    music.play();
    
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
