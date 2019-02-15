'use strict'

const store = require('../store')

const cellOccupiedAlert = function () {
  createFeedback(`You may not play in an occupied cell`, `warning`, 4000)
}

const gameOver = function () {
  createFeedback(`Game is already over. Please start a new game! ^_^`, `danger`, 4000)
}

const createFeedback = function (feedbackText, alertStyle, delay) {
  $('.user-feedback').html(`<div id="feedback" class="alert alert-${alertStyle}">${feedbackText}</div>`)

  setTimeout(() => {
    $('#feedback').fadeTo(500, 0).slideUp(500, function () {
      $(this).remove()
    })
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
    $('#' + index).text(cell)
  })
}

const updateGameStatus = (game, winner) => {
  if (game.over) {
    displayPlayerWinStatus(winner)
    if (winner === 'tie') {
      $('.game-status').text(`Game is a Tie! Play again?`)
    } else {
      $('.game-status').text(`Game is over... Play again?`)
    }
  } else {
    $('.game-status').text(`Game in progress...`)
    displayTurns()
  }
}

const displayPlayerWinStatus = function (winner) {
  if (winner === 'x') {
    $('.player-x-status').text(`Player X Won!!`)
    $('.player-o-status').text(`Player O Lost.`)
  } else if (winner === 'o') {
    $('.player-o-status').text(`Player O Won!!`)
    $('.player-x-status').text(`Player X Lost.`)
  } else if (winner === 'tie') {
    $('.player-x-status').text(`Player X tied.`)
    $('.player-o-status').text(`Player O tied.`)
  }
}

const displayTurns = function () {
  if (store.playerXTurn) {
    $('.player-x-status').text(`Player X's turn`)
    $('.player-o-status').text(`Player O is waiting`)
  }
  if (store.playerOTurn) {
    $('.player-o-status').text(`Player O's turn`)
    $('.player-x-status').text(`Player X is waiting`)
  }
}

module.exports = {
  cellOccupiedAlert,
  gameOver,
  fixSquares,
  renderGame
}
