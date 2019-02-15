'use strict'

const fixSquares = () => {
  const cellWidth = $('.square').width()
  $('.square').css({'height': cellWidth + 'px'})
}

const renderGame = game => {
  game.cells.forEach((cell, index) => {
    $('#' + index).text(cell)
  })
}

module.exports = {
  fixSquares,
  renderGame
}
