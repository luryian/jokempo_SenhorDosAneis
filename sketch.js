// Terefa 3 - Lucas Ryan 
// 1- mago
// 2- elfo
// 3- hobit
// 4- humano
// 5- anão

let iniciobk, escolhabk, instrubk, batalhabk, mago, elfo, hobit, anao, humano, vitoria, empate, derrota;
let n, pc, tela ;

function preload(){
  iniciobk = loadImage("data/iniciobk.png");
  instrubk = loadImage("data/instrubk.png");
  batalhabk = loadImage("data/batalhabk.png");
  escolhabk = loadImage("data/escolhabk.png");
  mago = loadImage("data/mago.png");
  elfo = loadImage("data/elfo.png");
  hobit = loadImage("data/hobit.png");
  humano = loadImage("data/humano.png");
  anao = loadImage("data/anao.png");
  vitoria = loadImage("data/vitoria.png");
  empate = loadImage("data/empate.png");
  derrota = loadImage("data/derrota.png");
}

function setup(){
  background('#455C71');
  createCanvas(930, 930);
  
  pc = int(random(1,5));
  tela = 0;
  
}

function draw(){
  if(tela == 0){
  inicio();
  }
  
  if(tela == 1){
  escolha();
  }
  
  if(tela == 2){
  batalha();
  }
  
  if(tela == 3){
  instru();
  }
  
  if(tela == 4){
    exit() ;
  }
  
}

function mouseClicked(){
if(tela==0){
if(mouseX > 350 && mouseX < 580){
  
  // botão de jogar
  if(mouseY > 500 && mouseY < 576){
    tela = 1;
  }
  
  // botão de instrução
  if(mouseY > 620 && mouseY < 695){
    tela = 3;
    
  }
  
  // botão de sair
  if(mouseY > 735 && mouseY < 815){
   tela = 4;
  }
}
}

if (tela == 1){
  if (mouseX < 255 && mouseY > 270 && mouseY < 620 ){
  n = 1;
  pc = int(random(1,5));
  tela = 2;
  }
  
  if (mouseX > 390 && mouseX < 530 && mouseY < 448 && mouseY > 135){
  n = 2;
  pc = int(random(1,5));
  tela = 2;
  }
  
  if ( mouseX > 680 && mouseY > 270 && mouseY < 620){
  n = 3;
  pc = int(random(1,5));
  tela = 2;
  }
  
  if (mouseX <747 && mouseX > 560 && mouseY > 616){
  n = 4;
  pc = int(random(1,5));
  tela = 2;
  }
  
  if (mouseX < 366 && mouseX > 223 &&  mouseY > 616){
  n = 5;
  pc = int(random(1,5));
  tela = 2;
  }

}

if (tela == 3){
  if(mouseX > 0 && mouseX < 110 && mouseY > 0 && mouseY <75){
    tela = 0;
  }
}

}

function keyPressed(){
  if(keyCode == ENTER  && tela == 2){
    tela = 0;
  }
}

function inicio(){
image(iniciobk, 0, 0);

}

function instru(){
image(instrubk, 0, 0);
}

function escolha(){
image(escolhabk, 0, 0);
}

function batalha(){
image(batalhabk, 0, 0);
//1
if (n == 1) {
  image(mago, 350, 530, 110,210);
  
  if (pc == 1){ 
    image(mago, 490, 530, 110,210);
    image(empate, 10, 250, 930, 90);
    
  }
  
  if (pc == 2){
    image(elfo, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 3){
    image(hobit, 490, 530, 90,220);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 4){
    image(humano, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 5){
    image(anao, 490, 530, 90,210);
    image(derrota, 10, 250, 930, 100);
  }
  
}

//2
if (n == 2) {
  image(elfo, 350, 530, 110,210);
  
  if (pc == 1){
    image(mago, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 2){
    image(elfo, 490, 530, 110,210);
    image(empate, 10, 250, 930, 90);
  }
  
  if (pc == 3){
    image(hobit, 490, 530, 90,220);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 4){
    image(humano, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 5){
    image(anao, 490, 530, 90,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
}

//3
if (n == 3) {
  image(hobit, 370, 530, 90,220);
  
  if (pc == 1){
    image(mago, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 2){
    image(elfo, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 3){
    image(hobit, 490, 530, 90,220);
    image(empate, 10, 250, 930, 90);
  }
  
  if (pc == 4){
    image(humano, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 5){
    image(anao, 490, 530, 90,210);
    image(derrota, 10, 250, 930, 100);
  }

}

//4
if (n == 4) {
  image(humano, 350, 530, 110,210);
  
  if (pc == 1){
    image(mago, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 2){
    image(elfo, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 3){
    image(hobit, 490, 530, 90,220);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 4){
    image(humano, 490, 530, 110,210);
    image(empate, 10, 250, 930, 90);
  }
  
  if (pc == 5){
    image(anao, 490, 530, 90,210);
    image(vitoria, 15, 250, 900, 110);
  }
}

//5
if (n == 5) {
  image(anao, 370, 530, 90,210);
  
  if (pc == 1){
    image(mago, 490, 530, 110,210);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 2){
    image(elfo, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 3){
    image(hobit, 490, 530, 90,220);
    image(vitoria, 15, 250, 900, 110);
  }
  
  if (pc == 4){
    image(humano, 490, 530, 110,210);
    image(derrota, 10, 250, 930, 100);
  }
  
  if (pc == 5){
    image(anao, 490, 530, 90,210);
    image(empate, 10, 250, 930, 90);
  }
}
  
}