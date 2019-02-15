'use strict'

const config = require('../config')
const store = require('../store')

const createExample = function (example) {
  return $.ajax({
    url: `${config.apiUrl}/examples/`,
    method: 'POST',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {example}
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

const updateExample = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/examples/${formData.example.id}`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: {
      example: {
        text: formData.example.text
      }
    }
  })
}

module.exports = {
  createExample,
  getExamples,
  getExample,
  destroyExample,
  updateExample
}
