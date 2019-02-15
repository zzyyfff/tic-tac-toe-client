'use strict'

const ui = require('./ui')
const gameLogic = require('./game-logic')
const store = require('../store')

const onStartNewGame = function (event) {
  store.game = new gameLogic.Game(0, 0, 'test@user.com')
  ui.renderGame(store.game)
}

const onGameCellClick = function (event) {
  const currentGame = store.game
  const cell = +event.target.id

  // attempt to play in clicked cell
  if (!currentGame.over && gameLogic.gamePlayInCell(cell, currentGame)) {
    // if a valid play is made,
    // check for winner and re-render game
    const winner = gameLogic.decideWinState(currentGame)
    ui.renderGame(currentGame, winner)
  } else if (!currentGame.over) {
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
