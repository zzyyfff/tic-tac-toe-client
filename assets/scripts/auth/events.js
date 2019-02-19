'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

const onRegisterReveal = function (event) {
  event.preventDefault()
  ui.fadeOutSignIn()
}

const onSignInReveal = function (event) {
  event.preventDefault()
  ui.fadeInSignIn()
}

const onPassChangeClose = function (event) {
  ui.resetPassChangeForm($('#change-password-form'))
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#register-reveal').on('click', onRegisterReveal)
  $('#sign-in-reveal').on('click', onSignInReveal)
  $('#pass-change-close').on('click', onPassChangeClose)
}

module.exports = {
  addHandlers
}
