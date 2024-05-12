

let Gameboard = {}

const players = {
    playerX: {playerName: 'x', value: 'x', pic: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M114.31 117.18L81.14 68.9l33-49.02c.48-.73.54-1.66.12-2.43a2.357 2.357 0 0 0-2.08-1.25H84.33c-.78 0-1.51.38-1.95 1.03L64 43.97L45.62 17.22a2.373 2.373 0 0 0-1.95-1.03H15.83c-.87 0-1.68.48-2.08 1.25c-.42.77-.36 1.71.12 2.43L46.86 68.9l-33.17 48.28c-.49.72-.55 1.66-.14 2.44c.41.77 1.22 1.26 2.09 1.26H44.9c.79 0 1.52-.39 1.96-1.04L64 94.36l17.15 25.48c.44.65 1.17 1.04 1.96 1.04h29.25c.88 0 1.68-.49 2.1-1.26c.4-.78.35-1.72-.15-2.44z" fill="#e63333"></path>
    </g>
        </svg>`},
    playerO: {playerName: 'o', value: 'o', pic: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z" clip-rule="evenodd" fill="#40C0E7" fill-rule="evenodd"></path>
        </g>
        </svg>`}
}

let activePlayer


const gameController = (function () {

    const startGame = () => start()
    const restartGame = () => restart()
    /* const players = () => definePlayers() */
    return {startGame, restartGame}
})()


function start () {
    const array = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]
    Gameboard.gameboard = array
    activePlayer = players.playerX
    defineBoard()
    /* gameController.players() */
}

function restart () {
    const array = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]
    Gameboard.gameboard = array
    activePlayer = players.playerX
    defineBoard()
    /* gameController.players */
}

/* function definePlayers () {
   
} */

function switchPlayer () {
    activePlayer == players.playerX ? activePlayer = players.playerO : activePlayer = players.playerX
}

function printOnBoard (x, y, player = activePlayer) {
    if (Gameboard.gameboard[x][y] == '0') {
        Gameboard.gameboard[x][y] = player.value
        const divBoardChild = document.querySelector(`.board-${x}-${y}`)
        divBoardChild.innerHTML = player.pic
        switchPlayer()
    }
    winCondition()
    drawCondition()

}

function winCondition () {
    if (Gameboard.gameboard[0][0] == Gameboard.gameboard[0][1] && Gameboard.gameboard[0][0] == Gameboard.gameboard[0][2] && Gameboard.gameboard[0][0] != 0) {
        winner(0,0)
    }

    if (Gameboard.gameboard[1][0] == Gameboard.gameboard[1][1] && Gameboard.gameboard[1][0] == Gameboard.gameboard[1][2] && Gameboard.gameboard[1][0] != 0) {
        winner(1,0)
    }

    if (Gameboard.gameboard[2][0] == Gameboard.gameboard[2][1] && Gameboard.gameboard[2][0] == Gameboard.gameboard[2][2] && Gameboard.gameboard[2][0] != 0) {
        winner(2,0)
    }

    if (Gameboard.gameboard[0][0] == Gameboard.gameboard[1][1] && Gameboard.gameboard[0][0] == Gameboard.gameboard[2][2] && Gameboard.gameboard[0][0] != 0) {
        winner(0,0)
    }

    if (Gameboard.gameboard[0][0] == Gameboard.gameboard[1][0] && Gameboard.gameboard[0][0] == Gameboard.gameboard[2][0] && Gameboard.gameboard[0][0] != 0) {
        winner(0,0)
    }

    if (Gameboard.gameboard[0][1] == Gameboard.gameboard[1][1] && Gameboard.gameboard[0][1] == Gameboard.gameboard[2][1] && Gameboard.gameboard[0][1] != 0) {
        winner(0,1)
    }

    if (Gameboard.gameboard[0][2] == Gameboard.gameboard[1][2] && Gameboard.gameboard[0][2] == Gameboard.gameboard[2][2] && Gameboard.gameboard[0][2] != 0) {
        winner(0,2)
    }
    
    if (Gameboard.gameboard[0][2] == Gameboard.gameboard[1][1] && Gameboard.gameboard[0][2] == Gameboard.gameboard[2][2] && Gameboard.gameboard[0][2] != 0) {
        winner(0,2)
    }
}

function winner (x, y) {
    console.log(`Player ${Gameboard.gameboard[x][y]} wins`)
}

function drawCondition () {
    let zeroExist
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (Gameboard.gameboard[i][j] == 0) {
                zeroExist = true
            }
        }
    }
    if (zeroExist != true) console.log("draw")
}

function defineBoard () {

    const squareZeroZero = document.querySelector(".board-0-0")
    const squareZeroOne = document.querySelector(".board-0-1")
    const squareZeroTwo = document.querySelector(".board-0-2")
    const squareOneZero = document.querySelector(".board-1-0")
    const squareOneOne = document.querySelector(".board-1-1")
    const squareOneTwo = document.querySelector(".board-1-2")
    const squareTwoZero = document.querySelector(".board-2-0")
    const squareTwoOne = document.querySelector(".board-2-1")
    const squareTwoTwo = document.querySelector(".board-2-2")

    squareZeroZero.addEventListener('click', () => printOnBoard(0,0))
    squareZeroOne.addEventListener('click', () => printOnBoard(0,1))
    squareZeroTwo.addEventListener('click', () => printOnBoard(0,2))
    squareOneZero.addEventListener('click', () => printOnBoard(1,0))
    squareOneOne.addEventListener('click', () => printOnBoard(1,1))
    squareOneTwo.addEventListener('click', () => printOnBoard(1,2))
    squareTwoZero.addEventListener('click', () => printOnBoard(2,0))
    squareTwoOne.addEventListener('click', () => printOnBoard(2,1))
    squareTwoTwo.addEventListener('click', () => printOnBoard(2,2))
}







/* <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M114.31 117.18L81.14 68.9l33-49.02c.48-.73.54-1.66.12-2.43a2.357 2.357 0 0 0-2.08-1.25H84.33c-.78 0-1.51.38-1.95 1.03L64 43.97L45.62 17.22a2.373 2.373 0 0 0-1.95-1.03H15.83c-.87 0-1.68.48-2.08 1.25c-.42.77-.36 1.71.12 2.43L46.86 68.9l-33.17 48.28c-.49.72-.55 1.66-.14 2.44c.41.77 1.22 1.26 2.09 1.26H44.9c.79 0 1.52-.39 1.96-1.04L64 94.36l17.15 25.48c.44.65 1.17 1.04 1.96 1.04h29.25c.88 0 1.68-.49 2.1-1.26c.4-.78.35-1.72-.15-2.44z" fill="#e63333"></path>
    </g>
        </svg> */


/* <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet" fill="#000000">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
        <path d="M64.01 15.06c-34.13 0-55.46 24.1-55.46 53.82c0 29.73 21.33 53.82 55.46 53.82c34.12 0 55.45-24.1 55.45-53.82c-.01-29.73-21.33-53.82-55.45-53.82zm0 81.78c-17.73 0-28.82-12.52-28.82-27.96s11.08-27.96 28.82-27.96c17.73 0 28.81 12.52 28.81 27.96c-.01 15.44-11.09 27.96-28.81 27.96z" clip-rule="evenodd" fill="#40C0E7" fill-rule="evenodd"></path>
        </g>
        </svg> */