var tom, tomImg1, tomImg2, tomImg3
var jerry, jerryImg1, jerryImg2, jerryImg3
var bgImg



function preload() {
    //load the images here
    tomImg1 = loadImage ('images/cat1.png');
    tomImg2 = loadAnimation ('images/cat2.png','images/cat3.png');
    tomImg3 = loadImage ('images/cat4.png');

    bgImg = loadImage ('images/garden.png');

    jerryImg1 = loadImage ('images/mouse1.png');
    jerryImg2 = loadAnimation ('images/mouse2.png', 'images/mouse3.png');
    jerryImg3 = loadImage ('images/mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(800,600);
    
    tom.addImage('tom',tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200,600);

    jerry.addImage('jerry', jerryImg1);
    jerry.scale = 0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocityX = 0;
        tom.addImage ('tom3', tomImg3)
        tom.changeAnimation ('tom3')
        tom.x = 250;
        tom.scale = 0.2;

        jerry.addImage ('jerry3', jerryImg3)
        jerry.changeAnimation ('jerry3')
        jerry.scale = 0.2
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation ('tom2', tomImg2);
        tom.changeAnimation ('tom2')

        jerry.addAnimation('jerry3', jerryImg2);
        jerry.changeAnimation('jerry3')
        jerry.frameDelay = 25;


    }

}
