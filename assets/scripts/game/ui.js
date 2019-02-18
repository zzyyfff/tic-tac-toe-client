'use strict'

const store = require('../store')
const gameLogic = require('./game-logic')
const api = require('./api')

const cellOccupiedAlert = function (cellId) {
  cellFeedback(cellId, 3000)
}

const currentGameIsUntouchedFeedback = function () {
  createFeedback(`New game has already been created; go ahead and play!`, 4000)
}

const gameOver = function () {
  createFeedback(`Game is already over. Please start a new game! ^_^`, 4000)
}

const newGameSuccess = function (responseData) {
  store.game = responseData.game
  store.playerOTurn = false
  store.playerXTurn = true
  store.readyToAcceptNewGame = false
  fadeOutNewGameButton()
  fadeOutResetGameButton()
  fadeInGameStatus()
  $('#winner').html('')
  renderGame(store.game)
}

const updateGameSuccess = function (responseData) {
  store.game = responseData.game
  renderGame(store.game)
  if (store.winner !== '') {
    declareWinner()
    updateStats()
  }
}

const declareWinner = function () {
  if (store.winner === 'x') {
    $('#winner').html('X wins!')
  } else if (store.winner === 'o') {
    $('#winner').html('O wins!')
  } else if (store.winner === 'tie') {
    $('#winner').html(`It's a tie!`)
  }
  $('#winner').show()
  $('#start-game-button').html('Play again?')
  fadeInNewGameButton()
}

const updateStats = function () {
  if (store.user) {
    api.getCompletedGames()
      .then(getCompletedGamesSuccess)
      .catch(failure)
  }
}

const getCompletedGamesSuccess = function (responseData) {
  $('.games-display').html('')

  store.gamesStats = responseData.games.reduce((accum, game) => {
    accum.completed++
    if (gameLogic.isGameWinner('x', game)) {
      accum.xWon++
    } else if (gameLogic.isGameWinner('o', game)) {
      accum.oWon++
    } else {
      accum.tied++
    }
    return accum
  }, {completed: 0, xWon: 0, oWon: 0, tied: 0})

  $('#games-completed').html(`${store.gamesStats.completed} games completed`)
  $('#games-x-won').html(`${store.gamesStats.xWon} won by X`)
  $('#games-o-won').html(`${store.gamesStats.oWon} won by O`)
  $('#games-tied').html(`${store.gamesStats.tied} tied`)
}

const cellFeedback = function (cellId, delay) {
  $('#' + cellId).tooltip('show')
  setTimeout(() => {
    $('#' + cellId).tooltip('hide')
  }, delay)
}

const createFeedback = function (feedbackText, alertStyle, delay) {
  $('.game-status').html(feedbackText)
  $('.game-status').fadeIn(300)

  setTimeout(() => {
    $('.game-status').fadeOut(300)
  }, delay)
}

const fixSquares = () => {
  const cellWidth = $('.square').width()
  $('.square').css({'height': cellWidth + 'px'})
}

const renderGame = function (game, winner) {
  renderBoard(game)
  updateGameStatus(game, winner)
}

const renderBoard = game => {
  game.cells.forEach((cell, index) => {
    $('#' + index).text(cell.toUpperCase())
  })
}

const updateGameStatus = (game, winner) => {
  if (game.over) {
    $('.game-status').removeClass('player-x')
    $('.game-status').removeClass('player-o')
    $('.game-status').text(`Game has ended.`)
    fadeOutResetGameButton()
  } else {
    if (store.playerXTurn) {
      $('.game-status').removeClass('player-o')
      $('.game-status').addClass('player-x')
      $('.game-status').text(`Player X's turn`)
    } else if (store.playerOTurn) {
      $('.game-status').removeClass('player-x')
      $('.game-status').addClass('player-o')
      $('.game-status').text(`Player O's turn`)
    }
  }
}

const fadeOutNewGameButton = function () {
  $('.grey-out-game').fadeOut(300)
  $('.start-new-game').fadeOut(300)
}

const fadeInNewGameButton = function () {
  $('.grey-out-game').fadeIn(300)
  $('.start-new-game').fadeIn(300)
}

const fadeOutResetGameButton = function () {
  $('.reset-game-button').fadeOut(300)
}

const fadeInResetGameButton = function () {
  $('.reset-game-button').fadeIn(300)
}

const fadeOutGameStatus = function () {
  $('.game-status').fadeOut(300)
}

const fadeInGameStatus = function () {
  $('.game-status').fadeIn(300)
}

const failure = function (responseData) {
  createFeedback(`Someting went wrong; please try again.`, 4000)
}

module.exports = {
  cellOccupiedAlert,
  currentGameIsUntouchedFeedback,
  gameOver,
  fixSquares,
  renderGame,
  renderBoard,
  newGameSuccess,
  updateGameSuccess,
  getCompletedGamesSuccess,
  createFeedback,
  updateStats,
  fadeInNewGameButton,
  fadeOutGameStatus,
  fadeInResetGameButton,
  fadeOutResetGameButton,
  failure
}
