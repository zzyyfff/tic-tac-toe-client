'use strict'

const ui = require('./ui')
const api = require('./api')
const gameLogic = require('./game-logic')
const store = require('../store')
store.readyToAcceptNewGame = true

const onStartNewGame = function () {
  if (store.readyToAcceptNewGame) {
    api.createGame()
      .then(ui.newGameSuccess)
      .catch(ui.failure)
  } else {
    ui.currentGameIsUntouchedFeedback()
  }
}

const onGameCellClick = function (event) {
  const game = store.game
  const cell = +event.target.id

  // attempt to play in clicked cell
  if (!game.over && gameLogic.playMoveInCell(cell, game)) {
    // if a valid move is made, check for winner, re-render game
    // and update API
    const winner = gameLogic.decideWinState(game)
    ui.renderGame(game, winner)
    api.updateExample(game, cell)
      .then(ui.updateGameSuccess)
      .catch(ui.failure)
  } else if (!game.over) {
    ui.cellOccupiedAlert()
  } else {
    ui.gameOver()
  }
}

const addHandlers = () => {
  $(window).resize(ui.fixSquares)
  $(document).ready(ui.fixSquares)
  $('.game-cell').on('click', onGameCellClick)
  $('.start-new-game').on('click', onStartNewGame)
}

module.exports = {
  addHandlers
}
