//pontos
let meuPonto=0;
let pontoOponente=0;

//enfeite
let cor=180

//Gol
let xGol=[1,796];
let yGol=145;
let comprimentoGol=3;
let larguraGol=110;
let somGol;



function placar(){
  
  textAlign(CENTER);
  textSize(18);
  
  stroke(255)
  fill(color(0,0,68));
  rect(150,10, 40, 20);
  fill(255);
  noStroke();
  text(meuPonto, 170, 26);
  fill(255);
  noStroke();
  text("Time 1", 100, 26);
  
  stroke(255)
  fill(color(0,0,68));
  rect(600, 10, 40, 20);
  fill(255);
  noStroke();
  text(pontoOponente, 620, 26);
  fill(255);
  noStroke();
  text("Time 2", 700, 26);
}

function marcarPonto(){
    if(xBola + raio >= 700){
    meuPonto+=1;    
    }
    if(xBola - raio <=10){
    pontoOponente+=1;
    }
  reiniciaBola();
  }

function vencedores(){
  if (meuPonto >=10){
    textAlign(CENTER);
    textSize(23);
    fill(0);
    rect(290, 150, 220, 120, 14)
    fill(255);
    text('Jogador 1 - Vence!', 400, 220);
    noLoop();
    
  }
  if (pontoOponente >=10){
    textAlign(CENTER);
    textSize(23);
    fill(0);
    rect(290, 150, 220, 120, 14)
    fill(255);
    text('Jogador 2 - Vence!', 400, 220);
    noLoop();
  }
}

function areaDoGol(){
  for( let i=0; i<xGol.length; i++){
  fill(255);
  rect(xGol[i], yGol, comprimentoGol, larguraGol);
  }
}

function campoDesenho(){

//linhas laterais
  
  fill(cor);
  strokeWeight(1)
  rect(10, 5, 780, 2);
  rect(10, 395, 780, 2);
 
// linhas de fundo
  
  fill(cor);
  strokeWeight(1)
  rect(9, 5, 2, 392);
  rect(789, 5, 2, 392); 
  
// meio de campo
  
  fill(cor);
  strokeWeight(2)
  rect(400, 5, 2, 390);
  fill(cor);
  circle(401, 200, 5);
  noFill();
  stroke(cor)
  circle(401, 200, 120)
   
//time esquerda
  
  fill(cor);
  strokeWeight(2)
  rect(10, 120, 60, 1);
  rect(70, 120, 1, 160);
  rect(10, 280, 60, 1);
  rect(10, 150, 30, 1);
  rect(40, 150, 1, 100);
  rect(10, 250, 30, 1);
  stroke(cor)
  noFill();
  arc(70, 200, 50, 90, (PI * 3)/2, PI/2);
  

    
//time direita
  fill(cor);
  strokeWeight(2)
  rect(730, 120, 60, 1);
  rect(730, 120, 1, 160);
  rect(730, 280, 60, 1);
  rect(760, 150, 30, 1);
  rect(760, 150, 1, 100);
  rect(760, 250, 30, 1);
  stroke(cor);
  noFill();
  arc(730, 200, 50, 90, PI/2, (PI * 3)/2);
  noFill();
  
}

