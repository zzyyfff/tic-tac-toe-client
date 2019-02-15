'use strict'

const store = require('../store')

const Game = function (gameId, playerXId, playerXEmail) {
  this.id = gameId
  this.cells = ['', '', '', '', '', '', '', '', '']
  this.over = false
  this.player_x = {
    id: playerXId,
    email: playerXEmail
  }
  this.player_o = ''
}

const decideWinState = (game) => {
  // the set of 8 possible win condition vectors
  const winConditions = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

  let winner = ''

  if (winConditions.some(winCondition => {
    return winCondition.every(index => game.cells[index] === 'x')
  }, '')) {
    winner = 'x'
    game.over = true
  } else if (winConditions.some(winCondition => {
    return winCondition.every(index => game.cells[index] === 'o')
  }, '')) {
    winner = 'o'
    game.over = true
  } else if (game.cells.every(element => element !== '')) {
    winner = 'tie'
    game.over = true
  }

  if (winner !== '') {
    console.log('Winner is ?', winner)
  }
}

const gameCellClick = (event, game) => {
  const cell = +event.target.id

  // if the cell is empty, add to cells array,
  // change turns, and return true.
  // Otherwise, return false
  if (game.cells[cell] === '') {
    if (store.playerXTurn) {
      game.cells[cell] = 'x'
      store.playerXTurn = false
      store.playerOTurn = true
      return true
    } else if (store.playerOTurn) {
      game.cells[cell] = 'o'
      store.playerOTurn = false
      store.playerXTurn = true
      return true
    } else {
      return false
    }
  }
}
module.exports = {
  Game,
  decideWinState,
  gameCellClick
}
