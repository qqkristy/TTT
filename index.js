
var turn = 0;

function playRound(oOrx){
  if(oOrx.innerText == "" && turn == 0){
    oOrx.innerText= "O";
    turn = 1;
  }
  else if(oOrx.innerText == "" && turn == 1){
    oOrx.innerText= "X";
    turn = 0;
  }
  else{
    confirm("Please select other empty boxes!!");
  }

  if(checkRow()){
    if(turn==0){
      confirm("X Wins!!");
      clearTable();
    }
    if(turn==1){
      confirm("O Wins!!");
      clearTable();
    }
    else if(boxFull()){
      confirm("Game over!");
      clearTable();
    }
  }
}

//Box Full function not working (For is not working) 
function boxFull(){
  for(i=1; i<=3; j++)
    for(j=1; j<=3; j++)
      var element = document.getElementById('ttt'+i+j);
    if (element.innerText == ""){
      return false;
    }  
    else{
      return true;
    }
  }

  function checkRow(){
    var element11 = document.getElementById('ttt11');
    var element12 = document.getElementById('ttt12');
    var element13 = document.getElementById('ttt13');
    var element21 = document.getElementById('ttt21');
    var element22 = document.getElementById('ttt22');
    var element23 = document.getElementById('ttt23');
    var element31 = document.getElementById('ttt31');
    var element32 = document.getElementById('ttt32');
    var element33 = document.getElementById('ttt33'); 

    var text;
    if (turn === 0) {
      text = 'X';
    } else {
      text = 'O';
    }

    if (element11.innerText == text && element12.innerText == text && element13.innerText == text ){
      return true;
    }
    if (element21.innerText == text && element22.innerText == text && element23.innerText == text ){
      return true;
    }
    if (element31.innerText == text && element32.innerText == text && element33.innerText == text ){
      return true;
    }
    if (element11.innerText == text && element21.innerText == text && element31.innerText == text ){
      return true;
    }
    if (element12.innerText == text && element22.innerText == text && element32.innerText == text ){
      return true;
    }
    if (element13.innerText == text && element23.innerText == text && element33.innerText == text ){
      return true;
    }
    if (element11.innerText == text && element22.innerText == text && element33.innerText == text ){
      return true;
    }
    if (element13.innerText == text && element22.innerText == text && element31.innerText == text ){
      return true;
    }

    return false;
  }

  function clearTable(){
    var element11 = document.getElementById('ttt11');
    var element12 = document.getElementById('ttt12');
    var element13 = document.getElementById('ttt13');
    var element21 = document.getElementById('ttt21');
    var element22 = document.getElementById('ttt22');
    var element23 = document.getElementById('ttt23');
    var element31 = document.getElementById('ttt31');
    var element32 = document.getElementById('ttt32');
    var element33 = document.getElementById('ttt33'); 


    element11.innerText = "";
    element12.innerText = "";
    element13.innerText = "";
    element21.innerText = "";
    element22.innerText = "";
    element23.innerText = "";
    element21.innerText = "";
    element32.innerText = "";
    element33.innerText = "";

  }
