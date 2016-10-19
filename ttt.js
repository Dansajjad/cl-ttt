// const prompt = require('prompt');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let boardContent, isOccupied, numSquaresFilled, winCombo, turn, status;

(function initialize() {
    turn = 0;  
    isOccupied = []; //
    boardContent = []; //
    numSquaresFilled = 0;
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
      boardContent[i] = i;
    }
    printBoard();

    rl.question('Please select a cell Num? ', (answer) => {
      // TODO: Log the answer in a database
      
      rl.on('line', (answer) => {
        console.log('You have selected cell #:', answer);
        markCell(answer); 
      });

      if(status === "game over") rl.close();
    });

}());

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
    console.log('checking for winner');
    checkForWinners(boardContent[cellNum]);
    if(numSquaresFilled === 9) {
      console.log("Game Over");
      status = "game over";
      rl.close();
    }
    
    printBoard();

  } else {
    console.log("The cell is occupied, please select another cell");
  }
}

function checkForWinners(symbol) {
  console.log('HELLO', symbol);
  for(let i = 0; i < winCombo.length; i++) {
    if(winCombo[i][0] == symbol &&
       winCombo[i][1] == symbol &&
       winCombo[i][2] == symbol) {
        console.log(symbol + "Won!");
        status = "game over";
    }
  }
}


function printBoard () {
  console.log("\n" +
    boardContent[0] + "|" + boardContent[1] + "|" +  boardContent[2] + "\n" +        
    boardContent[3] + "|" + boardContent[4] + "|" +  boardContent[5] + "\n" +        
    boardContent[6] + "|" + boardContent[7] + "|" +  boardContent[8] + "\n"        
              );
}