//variaveis da Bola
let direcao1 = [-1, 1];
let xBola=400;
let yBola=200;
let diametro=18;
let raio= diametro/2;

//velocidade da Bola
let velocidadeX =5;
let velocidadeY =5;

//Colisões
colidiuGol=false;
colidiuJogador=false;


function mostrarBola(){
  noStroke();
  circle(xBola, yBola, diametro);
  
}

function moviBola(){
  
  xBola+=velocidadeX;
  yBola+=velocidadeY;
}

function colisaoBolaParede(){
  //Colisão com a parede eixo X
  if (xBola + raio > width || xBola - raio < 0){
    velocidadeX*= -1;
  }
  //Colisão com a parede eixo Y
  if (yBola + raio > height || yBola - raio <0){
    velocidadeY*= -1;
}
}


function colisaoJogador(){
  for(let i=0; i< xJogador.length; i++){
    colidiuJogador= collideRectCircle(xJogador[i], yJogador[i], compJogador, largJogador, xBola, yBola, raio)
   if (colidiuJogador){
     velocidadeX *=-1.03;
     velocidadeY *= 1.03;
      }
    }
    }

function Gol(){
  for (i = 0; i < xGol.length; i++) {
  colidiuGol=collideRectCircle(xGol[i], yGol, comprimentoGol, larguraGol, xBola, yBola, raio);
    
  if (colidiuGol) {
    somGol.play();
    velocidadeX=0;
    velocidadeY=0;
    textAlign(CENTER);
    textSize(23);
    fill(0);
    rect(290, 150, 220, 120, 14)
    fill(255);
    text('Gooool', 400, 220);
    let espera2 = setTimeout(function(){marcarPonto()}, 1500);
  }
 }
}

function reiniciaBola(){
  xBola=400;
  yBola=200;
  velocidadeX=-5*random(direcao1);velocidadeY=5 *random(direcao1);
  }

