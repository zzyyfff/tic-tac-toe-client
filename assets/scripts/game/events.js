'use strict'

const ui = require('./ui')
const api = require('./api')
const gameLogic = require('./game-logic')
const store = require('../store')
const tvStatic = require('../static/tv-static')
store.readyToAcceptNewGame = true
store.invalidClickCounter = 0

const onStartNewGame = function () {
  if (store.readyToAcceptNewGame) {
    store.winner = ''
    api.createGame()
      .then(ui.newGameSuccess)
      .catch(ui.newGameFailure)
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
        .catch(ui.updateGameFailure)
      ui.fadeInResetGameButton()
    } else if (!game.over) {
      if (store.invalidClickCounter > 20) {
        tvStatic.fadeInStatic()
        setTimeout(tvStatic.fadeOutStatic, 5000)
        store.invalidClickCounter = 0
      } else {
        ui.cellOccupiedAlert(event.target.id)
        store.invalidClickCounter++
      }
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
