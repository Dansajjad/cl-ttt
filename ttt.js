const prompt = require('prompt');


let boardContent, isOccupied, winCombo, turn;

function initialize() {
    turn = 0;  
    isOccupied = []; //
    boardContent = []; //
    winCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    //looping to...
    for (var i = 0; i < 9; i++) {
      isOccupied[i] = false;
      boardContent[i] = "";
    }
}();

function markCell (cellNum) {
  //check if cell is occupied
  if(isOccupied[cellNum] === false) {
    //check if who is playing
    if(turn % 2 === 0) { 
      boardContent[cellNum] = "X" 
    } else {
      boardContent[cellNum] = "O" 
    }

    //Continue with 
    turn++;
    numSquaresFilled++;
    isOccupied[cellNum] = true;
    checkforWinners(boardContent[cellNum]);
    if(numSquaresFilled === 9) console.log("Game Over");
  } else {
    return "Select another cell";
  }
}

function checkForWinners(symbol) {
  for(let i = 0; i < winCombo.length; i++) {
    if(boardContent[i][0] == symbol &&
       boardContent[i][1] == symbol &&
       boardContent[i][2] == symbol) {
        console.log(symbol + "Won!");
    }
  }
}


function printBoard () {

}