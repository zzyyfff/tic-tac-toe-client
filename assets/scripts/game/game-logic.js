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
  let winner = ''

  // check if a win condition is met by 'x' or 'o'
  // or if the game is a tie game
  if (isGameWinner('x', game)) {
    winner = 'x'
    game.over = true
  } else if (isGameWinner('o', game)) {
    winner = 'o'
    game.over = true
  } else if (everyCellFilled(game)) {
    winner = 'tie'
    game.over = true
  }

  if (winner !== '') {
    console.log('Winner is ?', winner, 'On the line', store.winningLine)
  }
}

const isGameWinner = function (playerLetter, game) {
  // the set of 8 possible win condition coordinates
  const winConditions = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]]

  // check all winConditions on board for playerLetter match
  return winConditions.some(winCondition => {
    return winCondition.every((gameIndex, index, coordinates) => {
      // if every game coordinate in the current winCondition
      // is met, isGameWinner returns true and winningLine
      // is set to the passing winCondition coordinates
      store.winningLine = coordinates
      return game.cells[gameIndex] === playerLetter
    })
  })
}

const everyCellFilled = function (game) {
  // only called in a tie, so winningLine is null
  store.winningLine = null
  return game.cells.every(element => element !== '')
}

const gameCellPlay = (event, game) => {
  const cell = +event.target.id

  // if the cell is empty, add play to cells array,
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
  gameCellPlay
}
