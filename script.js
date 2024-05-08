

let Gameboard = {}

const players = {
    playerX: 'X',
    playerO: 'Y'
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
    /* gameController.players() */
}

function restart () {
    const array = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]
    Gameboard.gameboard = array
    activePlayer = players.playerX
    /* gameController.players */
}

/* function definePlayers () {
   
} */

function switchPlayer () {
    activePlayer == players.playerX ? activePlayer = players.playerO : activePlayer = playerX
}