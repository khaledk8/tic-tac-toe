

let Gameboard = {}

const players = {
    playerX: {playerName: 'x', value: 'x'},
    playerO: {playerName: 'o', value: 'o'}
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
    activePlayer == players.playerX ? activePlayer = players.playerO : activePlayer = players.playerX
}

function printOnBoard (x, y, player = activePlayer) {
    if (Gameboard.gameboard[x][y] == 0) {
        Gameboard.gameboard[x][y] = player.value
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
            if (Gameboard.gameboard[i][j] == 0) zeroExist = true
        }
    }
    if (zeroExist) console.log("draw")
}