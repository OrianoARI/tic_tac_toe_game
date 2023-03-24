function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cellOne = document.querySelectorAll(".cellOne");
let cellTwo = document.querySelectorAll(".cellTwo");
let cellThree = document.querySelectorAll(".cellThree");
let turn = 0;
let gameTableIndex = 0;
let player = 1;
console.log(player);
let gameTable = [
    [],
    [],
    []
];
let gameOver = false;


function checkWin() {
    for (let i = 0; i < gameTable.length; i++) {
        if (gameTable[i][0] != "" && gameTable[i][0] == gameTable[i][1] && (gameTable[i][1]) && gameTable[i][1] != "" && (gameTable[i][1] == gameTable[i][2])) {
            if (player == 2) {
                console.log("Player 1 gagne");
            } else {
                console.log("Player 2 gagne");
            }
            gameOver = true;
        }
        if (gameTable[0][i] != "" && gameTable[0][i] == gameTable[1][i] && gameTable[2][i] && gameTable[1][i] != "" && (gameTable[1][i] == gameTable[2][i])) {
            if (player == 2) {
                console.log("Player 1 gagne");
            } else {
                console.log("Player 2 gagne");
            }
            gameOver = true;
        }
        if (gameTable[0][0] != "" && gameTable[0][0] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][2])) {
            if (player == 2) {
                console.log("Player 1 gagne");
            } else {
                console.log("Player 2 gagne");
            }
            gameOver = true;
        }
        if (gameTable[0][2] != "" && gameTable[0][2] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][0])) {
            if (player == 2) {
                console.log("Player 1 gagne");
            } else {
                console.log("Player 2 gagne");
            }
            gameOver = true;
        } else {
            if (turn >= 9 && gameTable[i][0] != "" &&  gameTable[i][1] != "" && gameTable[0][i] != "" && gameTable[1][i] != "" && gameTable[0][0] != "" && gameTable[1][1] != "" && gameTable[0][2] != "")
                console.log("draw");
        }
    }
}



function play(elem) {
    if (elem.innerHTML != "X" && elem.innerHTML != "O" && gameOver == false) {
        if (player == 1) {
            elem.innerHTML = "X";
            player = 2;
        } else {
            elem.innerHTML = "O";
            player = 1;
        }
        updateGrid()
        console.log(gameTable);
        turn++
        if (turn >= 9) {
            gameOver = true;
        }
    }
    checkWin();
}

function updateGrid() {
    for (let i = 0; i < cellOne.length; i++) {
        gameTable[0][i] = cellOne[i].innerHTML
    }
    for (let i = 0; i < cellTwo.length; i++) {
        gameTable[1][i] = cellTwo[i].innerHTML
    }
    for (let i = 0; i < cellThree.length; i++) {
        gameTable[2][i] = cellThree[i].innerHTML
    }

}


