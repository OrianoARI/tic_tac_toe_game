function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cellOne = document.querySelectorAll(".cellOne");
let cellTwo = document.querySelectorAll(".cellTwo");
let cellThree = document.querySelectorAll(".cellThree");
let turn = 0;
let gameTableIndex = 0;
let player = 1;
let imp = document.querySelector("#imp");
let somb = document.querySelector("#somb");
let impWin = document.querySelector("#impWin");
let sombWin = document.querySelector("#sombWin");
let draw = document.querySelector("#draw");
let gameTable = [
    [],
    [],
    []
];
let gameOver = false;
let cell = document.querySelectorAll('.cell');
let randomIndex = random(0, document.querySelectorAll('.cell').length - 1);
console.log(randomIndex);


function checkWin() {
    for (let i = 0; i < gameTable.length; i++) {
        if (gameTable[i][0] != "" && gameTable[i][0] == gameTable[i][1] && (gameTable[i][1]) && gameTable[i][1] != "" && (gameTable[i][1] == gameTable[i][2])) {
            if (player == 1) {
                impWin.style.display = "block";
            } else {
                sombWin.style.display = "block";
            }
            gameOver = true;
        }
        if (gameTable[0][i] != "" && gameTable[0][i] == gameTable[1][i] && gameTable[2][i] && gameTable[1][i] != "" && (gameTable[1][i] == gameTable[2][i])) {
            if (player == 1) {
                impWin.style.display = "block";
            } else {
                sombWin.style.display = "block";
            }
            gameOver = true;
        }
        if (gameTable[0][0] != "" && gameTable[0][0] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][2])) {
            if (player == 1) {
                impWin.style.display = "block";
            } else {
                sombWin.style.display = "block";
            }
            gameOver = true;
        }
        if (gameTable[0][2] != "" && gameTable[0][2] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][0])) {
            if (player == 1) {
                impWin.style.display = "block";
            } else {
                sombWin.style.display = "block";
            }
            gameOver = true;
        } else {
            if (turn > 8) {
                draw.style.display = "block";
                console.log("draw");
                gameOver = true
            }
        }
    }
}

function play(elem) {
    if (elem.innerHTML != "X" && elem.innerHTML != "O" && gameOver == false) {
        if (player == 1) {
            somb.style.fontWeight = "bold";
            imp.style.fontWeight = "normal";
            elem.innerHTML = "X";
            turn++
            console.log(turn);
            updateGrid();
            checkWin();
            if (turn >= 8) {
                gameOver = true;
            }
            if (!gameOver) {
                console.log(gameOver);
                player = 2;
                imp.style.fontWeight = "bold";
                somb.style.fontWeight = "normal";
                setTimeout(cpuPlay, 400);
            }
        }


    }
    if (gameOver == true) {
        console.log(gameOver);
    }
}

function cpuPlay() {
    let cpuCell = random(0, 8)
    while (document.querySelectorAll('.cell')[cpuCell].innerHTML != "") {
        cpuCell = random(0, 8)
    }
    document.querySelectorAll(".cell")[cpuCell].innerHTML = "O"
    updateGrid();
    checkWin();
    turn++;
    player = 1;
    console.log(turn);
    if (turn >= 9) {
        gameOver = true;
    }
}


function reset() {
    cellOne.forEach(element => {
        element.innerHTML = ""
    });
    cellTwo.forEach(element => {
        element.innerHTML = ""
    });
    cellThree.forEach(element => {
        element.innerHTML = ""
    });
    impWin.style.display = "none";
    sombWin.style.display = "none";
    draw.style.display = "none";
    turn = 0;
    gameOver = false;
    console.log(gameOver);
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

imp.style.fontWeight = "bold";
somb.style.fontWeight = "normal";

