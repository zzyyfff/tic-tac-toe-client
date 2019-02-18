'use strict'

const ui = require('./ui')
const api = require('./api')
const gameLogic = require('./game-logic')
const store = require('../store')
store.readyToAcceptNewGame = true

const onStartNewGame = function () {
  if (store.readyToAcceptNewGame) {
    store.winner = ''
    api.createGame()
      .then(ui.newGameSuccess)
      .catch(ui.failure)
  } else {
    ui.currentGameIsUntouchedFeedback()
  }
}

const onGameCellClick = function (event) {
  if (!store.game) {
    ui.createFeedback(`Please start a new game`, `warning`, 2000)
  } else {
    const game = store.game
    const cell = +event.target.id

    // attempt to play in clicked cell
    if (!game.over && gameLogic.playMoveInCell(cell, game)) {
    // if a valid move is made, check for winner and update API
    // if API update is successfull,
    // re-render board and update stats (within updateGameSuccess)
      store.winner = gameLogic.decideWinState(game)
      api.updateGame(game, cell)
        .then(ui.updateGameSuccess)
        .catch(ui.failure)
      ui.fadeInResetGameButton()
    } else if (!game.over) {
      ui.cellOccupiedAlert(event.target.id)
    } else {
      ui.gameOver()
    }
  }
}

const addHandlers = () => {
  $(window).resize(ui.fixSquares)
  $(document).ready(ui.fixSquares)
  $('.game-cell').on('click', onGameCellClick)
  $('.reset-game').on('click', onStartNewGame)
}

module.exports = {
  addHandlers
}
