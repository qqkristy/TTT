var turn = 0;

function playRound(oOrx){
  if(oOrx.innerText == "" && turn == 0){
    console.log(" ");
    oOrx.innerText= "O";
    turn = 1;
  }
  else if(oOrx.innerText == "" && turn == 1){
    oOrx.innerText= "X";
    turn = 0;
  }
  else{
    confirm("OUCH!!");
  }
}

function checkWiner(){

}

