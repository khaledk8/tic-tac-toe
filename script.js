

let Gameboard = {}

const players = {
    playerX: 'X',
    playerO: 'Y'
}

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
    /* gameController.players() */
}

function restart () {
    const array = [[0,0,0],
                   [0,0,0],
                   [0,0,0]]
    Gameboard.gameboard = array
    /* gameController.players */
}

/* function definePlayers () {
   
} */