//variaveis dos Jogadores
let xJogador= [25, 290, 510, 768];
let yJogador=[150, 200, 200, 150];
let compJogador= 8;
let largJogador=80;
let camisaJogadores=[];

function mostrarJogadores(){
  camisaJogadores=[0,color(139,0,0), 0, color(139,0,0)];
    for( let i=0; i<xJogador.length;i++){
   
    fill(camisaJogadores[i]);
    noStroke();
    rect(xJogador[i], yJogador[i], compJogador, largJogador);
  }
}

function moveJogadorEsquerda(){
   //Goleiro 
  if(keyIsDown(87)){
      
    if(yJogador[0]!=0){
      yJogador[0]-=5;
  }else{
    yJogador[0]=0;
  }
    }
   if(keyIsDown(83)){
     
    if(yJogador[0]!=310){
      yJogador[0]+=5;
  }else{
    yJogador[0]=310;
  }
    }
  //Atacante
  if(keyIsDown(69)){
      
    if(yJogador[2]!=0){
      yJogador[2]-=10;
  }else{
    yJogador[2]=0;
  }
    }
   if(keyIsDown(68)){
     
    if(yJogador[2]!=310){
      yJogador[2]+=10;
  }else{
    yJogador[2]=310;
  }
    }
}

function moveJogadorDireita(){
//Atacante 
  if(keyIsDown(73)){
      
    if(yJogador[1]!=0){
      yJogador[1]-=10;
  }else{
    yJogador[1]=0;
  }
    }
   if(keyIsDown(75)){
     
    if(yJogador[1]!=310){
      yJogador[1]+=10;
  }else{
    yJogador[1]=310;
  }
    }
  //Goleiro
  if(keyIsDown(79)){
      
    if(yJogador[3]!=0){
      yJogador[3]-=5;
  }else{
    yJogador[3]=0;
  }
    }
   if(keyIsDown(76)){
     
    if(yJogador[3]!=310){
      yJogador[3]+=5;
  }else{
    yJogador[3]=310;
  }
   }
}
    
  
