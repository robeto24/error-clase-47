

var gato;
var perrosgroup;
var perrosImg;
var gatoImg;
var lava1;
var lava2;
var lava3;
var lava4;


function preload() {

perrosImg = loadImage("perrosfinal.png");  
gatoImg = loadImage("gatofinal.png");

}





function setup() {
  createCanvas(1300,1000);

perrosgroup = createGroup();


 gato = createSprite(650,500,20,20);
for(var i = 0;i <8 ; i++){
 perro = createSprite(Math.round(random(100,1200)),Math.round(random(100,900)),10,10)
perro.addImage("perros",perrosImg)
perro.scale = 0.1;
perrosgroup.add(perro)
}

lava1 = createSprite(650,0,1300,20);
lava2 = createSprite(650,1000,1300,20);
lava3 = createSprite(0,500,20,1300);
lava4 = createSprite(1300,500,20,1300);




}

function draw() {
  background("#2F1010");


 gato.addImage("gato",gatoImg)
 gato.scale = 0.1

 juego();



  drawSprites()
}


function movimiento(){

if(keyDown("W")){

gato.velocityY = -2;

}

if(keyDown("s")){

  gato.velocityY = 2;
  
  }
  if(keyDown("a")){

    gato.velocityX = -2;
    
    }
    if(keyDown("d")){

      gato.velocityX = 2;
      
      }
}



function inicio(){



}


function juego(){

  movimiento();
  //muerte por perros
  if(perrosgroup.isTouching(gato)){
    gato.remove();
    fin();
  }
  

  //lava
  if(lava1.isTouching(gato)||lava2.isTouching(gato)||lava3.isTouching(gato)||lava4.isTouching(gato)){
    gato.remove();
  }

if((perrosgroup.x - gato.x)<5||(perrosgroup.y - gato.y)<5){
console.log(1);
perrosgroup.velocityY = gato.velocityY +1;
perrosgroup.velocityX = gato.velocityX +1;  

}
}



function fin(){


inicio();

}