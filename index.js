
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
    confirm("Please select other empty boxes!!");//player tries to pick one is picked
  }

  if(checkRow()){
    if(turn==0){
      confirm("X Wins!!");
    }
    if(turn==1){
      confirm("O Wins!!");
    }
    else if (boxFull()){  
     confirm("Game over!"); //no one win
   }
 }
}


function boxFull(){ //when the table get full
  for(j=1; j<=3; j++)
    var element = document.getElementById('ttt'+i+j);
  if (element.innerText == ""){
    return false;
  }  
  else{
    return true;
  }
}

//  for(i=1; i<=3; i++)
//    for(j=1; j<=3; j++)
//      if (eval("ttt"+i+j).innerText == ""){
//        return false;
//      }  
//      else{
//        return true;
//      }
//    }


//function cleanTable(){//cleaning the table
//  for(i=1; i<=3; i++)
//  {
//    eval("ttt" + i + "1".innerText == "";
//      eval("ttt" + i + "2").innerText == "";
//      eval("ttt" + i + "3").innerText == "";
//    }
//  }



function checkRow()
{

  var element11 = document.getElementById('ttt11');
  var element12 = document.getElementById('ttt12');
  var element13 = document.getElementById('ttt13');
  var element21 = document.getElementById('ttt21');
  var element22 = document.getElementById('ttt22');
  var element23 = document.getElementById('ttt23');
  var element31 = document.getElementById('ttt31');
  var element32 = document.getElementById('ttt22');
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

//All the winning situaiton
//11 12 13   21 22 23  31 32 33   i+1 i+2 i+3
//11 21 31   12 22 32  13 23 33   1+i  2+i  3+i
//11 22 33   31 22 13   i+i 
//function checkWiner(){
//}
//ADD> Cleaning all the boxes when game over