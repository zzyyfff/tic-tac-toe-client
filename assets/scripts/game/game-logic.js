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
  makePlayerXTurn()
}

const decideWinState = (game) => {
  // check if a win condition is met by 'x' or 'o'
  // or if the game is a tie game
  if (isGameWinner('x', game)) {
    game.over = true
    return 'x'
  } else if (isGameWinner('o', game)) {
    game.over = true
    return 'o'
  } else if (everyCellFilled(game)) {
    game.over = true
    return 'tie'
  } else {
    return ''
  }

  // if (winner !== '') {
  //   console.log('Winner is ?', winner, 'On the line', store.winningLine)
  // }
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

const gamePlayInCell = (cell, game) => {
  // if the cell is empty, play in cell
  if (game.cells[cell] === '') {
    if (store.playerXTurn) { // if X's turn
      game.cells[cell] = 'x'
      makePlayerOTurn()
      return true
    } else if (store.playerOTurn) { // if O's turn
      game.cells[cell] = 'o'
      makePlayerXTurn()
      return true
    }
  } else { // if cell is already filled
    return false
  }
}

const makePlayerXTurn = function () {
  store.playerOTurn = false
  store.playerXTurn = true
}

const makePlayerOTurn = function () {
  store.playerXTurn = false
  store.playerOTurn = true
}

module.exports = {
  Game,
  decideWinState,
  gamePlayInCell
}
