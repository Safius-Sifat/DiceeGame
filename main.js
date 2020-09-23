var dice1 = Math.floor(Math.random()*6+1);
var dice2 = Math.floor(Math.random()*6+1);
resultDeclaration();
player1();
player2();


function player2() {
  if(dice2 === 1){
    document.getElementById("image2").src="./images/dice1.png";
  }
  if(dice2 === 2){
    document.getElementById("image2").src="./images/dice2.png";
  }
  if(dice2 === 3){
    document.getElementById("image2").src="./images/dice3.png";
  }
  if(dice2 === 4){
    document.getElementById("image2").src="./images/dice4.png";
  }
  if(dice2 === 5){
    document.getElementById("image2").src="./images/dice5.png";
  }
  if(dice2 === 6){
    document.getElementById("image2").src="./images/dice6.png";
  }

}


function player1() {
  if(dice1 === 1){
    document.getElementById("image1").src="./images/dice1.png";
  }
  if(dice1 === 2){
    document.getElementById("image1").src="./images/dice2.png";
  }
  if(dice1 === 3){
    document.getElementById("image1").src="./images/dice3.png";
  }
  if(dice1 === 4){
    document.getElementById("image1").src="./images/dice4.png";
  }
  if(dice1 === 5){
    document.getElementById("image1").src="./images/dice5.png";
  }
  if(dice1 === 6){
    document.getElementById("image1").src="./images/dice6.png";
  }
}



function resultDeclaration() {
  if(dice1 > dice2){
    document.querySelector("h1").innerHTML="Player 1 wins";
  }else if(dice1 < dice2){
    document.querySelector("h1").innerHTML="Player 2 wins";
  }else{
    document.querySelector("h1").innerHTML="It's a draw";
  }
}
