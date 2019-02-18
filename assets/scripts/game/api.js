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

const updateGame = function (game, cell) {
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

const getCompletedGames = function () {
  return $.ajax({
    url: `${config.apiUrl}/games?over=true`,
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
  createGame,
  updateGame,
  getCompletedGames
}
