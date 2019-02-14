'use strict'

const fixSquares = () => {
  const cellWidth = $('.square').width()
  $('.square').css({'height': cellWidth + 'px'})
}

module.exports = {
  fixSquares
}
