'use strict'

const config = require('../config')
const store = require('../store')

const signUp = credentials => $.ajax({
  url: `${config.apiUrl}/sign-up`,
  method: 'POST',
  data: credentials
})

const signIn = function (credentials) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: credentials
  })
}

const changePassword = function (passwords) {
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    },
    data: passwords
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
