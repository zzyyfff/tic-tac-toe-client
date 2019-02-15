'use strict'

const ui = require('./ui')
const gameLogic = require('./game-logic')
const store = require('../store')

const onStartNewGame = function (event) {
  store.game = new gameLogic.Game(0, 0, 'test@user.com')
  store.playerXTurn = true
  store.playerOTurn = false
  ui.renderGame(store.game)
}

const onGameCellClick = function (event) {
  const currentGame = store.game

  if (!currentGame.over && gameLogic.gameCellClick(event, currentGame)) {
    ui.renderGame(currentGame)
  } else if (!currentGame.over) {
    console.log('You may not play in an occupied cell')
  } else {
    console.log('Game is over')
  }

  gameLogic.decideWinState(currentGame)
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
