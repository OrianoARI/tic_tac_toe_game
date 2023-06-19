function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let cellOne = document.querySelectorAll(".cellOne");
let cellTwo = document.querySelectorAll(".cellTwo");
let cellThree = document.querySelectorAll(".cellThree");
let turn = 0;
let gameTableIndex = 0;
let player = 0;
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
let soloBtn = document.querySelector("#solo");
let multiBtn = document.querySelector("#multi");
let solo = true;
let multi = false;

function onePlayer() {
    solo = true;
    multi = false;
    soloBtn.style.fontWeight = "bold";
    multiBtn.style.fontWeight = "normal";
}

function multiPlayer() {
    solo = false;
    multi = true;
    soloBtn.style.fontWeight = "normal";
    multiBtn.style.fontWeight = "bold";
    turn = 0;
}

function checkWin() {
    console.log(gameTable);
    for (let i = 0; i < gameTable.length; i++) {
        if (gameTable[i][0] != "" && gameTable[i][0] == gameTable[i][1] && (gameTable[i][1]) && gameTable[i][1] != "" && (gameTable[i][1] == gameTable[i][2])) {
            if (gameTable[i][0] != "X") {
                sombWin.style.display = "block";
            } else {
                impWin.style.display = "block";
            }
            gameOver = true;
            return
        }
        if (gameTable[0][i] != "" && gameTable[0][i] == gameTable[1][i] && gameTable[2][i] && gameTable[1][i] != "" && (gameTable[1][i] == gameTable[2][i])) {
            if (gameTable[0][i] != "X") {
                sombWin.style.display = "block";
            } else {
                impWin.style.display = "block";
            }
            gameOver = true;
            return
        }
        if (gameTable[0][0] != "" && gameTable[0][0] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][2])) {
            if (gameTable[0][0] != "X") {
                sombWin.style.display = "block";
            } else {
                impWin.style.display = "block";
            }
            gameOver = true;
            return
        }
        if (gameTable[0][2] != "" && gameTable[0][2] == gameTable[1][1] && gameTable[1][1] && gameTable[1][1] != "" && (gameTable[1][1] == gameTable[2][0])) {
            if (gameTable[0][2] != "X") {
                sombWin.style.display = "block";
            } else {
                impWin.style.display = "block";
            }
            gameOver = true;
            return
        } else {
            if (turn >= 9 && !gameOver) {
                draw.style.display = "block";
                console.log("draw");
                gameOver = true
                console.log(gameOver);
                return
            }
        }
    }
}

function play(elem) {
    if (elem.innerHTML != "X" && elem.innerHTML != "O" && gameOver == false) {
        if (player % 2 == 0) {
            console.log(player);
            somb.style.color = "rgb(190, 33, 8)";
            imp.style.color = "white";
            elem.innerHTML = "X";
            turn++
            player++
            console.log(turn);
            updateGrid();
            checkWin();
            if (turn >= 9) {
                gameOver = true;
            }
            if (solo == true && multi == false && gameOver == false) {

                setTimeout(cpuPlay, 1000);
            }
        }
        else if (!gameOver && player % 2 != 0) {
            console.log(gameOver);
            imp.style.color = "rgb(190, 33, 8)";
            somb.style.color = "white";

            if (solo == false && multi == true) {
                elem.innerHTML = "O";
                setTimeout(player++, 200);
                setTimeout(turn++, 200);
                updateGrid();
                checkWin();
                console.log(turn);
            }
            if (turn >= 9) {
                gameOver = true;
            }
        }
    }
}

if (gameOver == true) {
    console.log(gameOver);
}


function cpuPlay() {
    let cpuCell = random(0, 8)
    imp.style.color = "rgb(190, 33, 8)";
    somb.style.color = "white";
    while (document.querySelectorAll('.cell')[cpuCell].innerHTML != "") {
        cpuCell = random(0, 8)
    }
    document.querySelectorAll(".cell")[cpuCell].innerHTML = "O"
    updateGrid();
    checkWin()
    turn++;
    console.log(turn);
    if (turn >= 9) {
        gameOver = true;
    }
    player++
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
    player = 0;
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


