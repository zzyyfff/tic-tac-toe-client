'use strict'

const ui = require('./ui')

const addHandlers = () => {
  $(window).resize(ui.fixSquares)
  $(document).ready(ui.fixSquares)
}

module.exports = {
  addHandlers
}
