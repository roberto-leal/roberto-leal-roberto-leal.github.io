//Opcao de Inicio
let telaMenu=1;
let modoJogadorJogador=false;
let xLarguraMenu=200;
let yAlturaMenu=50;
let posicaox=305;
let posicaoy=260;
let apito;
function preload(){
  apito = loadSound("Sons/Apito.mp3");
  somGol=  loadSound("Sons/Gol.mp3");
}


function setup() {
  createCanvas(800, 400);
  
}

function draw() {
  //Inicio
    if (telaMenu==1){
  background(0)
  textAlign(CENTER);
  textSize(20);
  
//1- Instruções
  stroke(255);
  fill(255);
  noStroke();
  text("Leia as instruções\n\nBom Jogo!", 400, 130);
       
  //2- Opcao Menu
  if ( mouseX > posicaox && mouseX < posicaox + xLarguraMenu && mouseY > posicaoy && mouseY < posicaoy + yAlturaMenu){
  stroke(240);
  fill(10);
  rect(posicaox, posicaoy,xLarguraMenu,yAlturaMenu, 15);
    if(mouseIsPressed){
      modoJogadorJogador=true;
      apito.play();
      let espera = setTimeout(function() {telaMenu=2}, 1000)
    }
  }
  fill(255);
  noStroke();   
  text("Jogar", 400, 290);
  }
    
  //Jogo
  if (telaMenu==2){
  background(color(0,100,0));
  mostrarBola();
  campoDesenho();  
  mostrarJogadores();
  areaDoGol();
  placar()
  vencedores();
  moveJogadorEsquerda();
  moveJogadorDireita();
  moviBola();
  colisaoBolaParede();
  colisaoJogador();
  Gol();
   }
  }





















