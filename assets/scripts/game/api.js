'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateExample = function (game, cell) {
  return $.ajax({
    url: `${config.apiUrl}/games/${game.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: cell,
          value: game.cells[cell]
        },
        over: game.over
      }
    }
  })
}

const getExamples = function () {
  return $.ajax({
    url: `${config.apiUrl}/examples/`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const getExample = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/examples/${formData.example.id}`,
    method: 'GET',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

const destroyExample = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/examples/${formData.example.id}`,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getExamples,
  getExample,
  destroyExample,
  updateExample,
  createGame
}
