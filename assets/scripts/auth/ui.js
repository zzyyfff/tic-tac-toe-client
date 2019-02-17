'use strict'

const store = require('../store')
const gameLogic = require('../game/game-logic')
const gameUi = require('../game/ui')

const createFeedback = function (feedbackText, alertStyle, delay) {
  $('.user-feedback').html(`<div id="feedback" class="alert alert-${alertStyle}">${feedbackText}</div>`)

  setTimeout(() => {
    $('#feedback').fadeTo(500, 0).slideUp(500, function () {
      $(this).remove()
    })
  }, delay)
}

const signUpSuccess = function (responseData) {
  createFeedback(`Successfully signed up!`, `success`, 4000)
  fadeInSignIn()
}

const signInSuccess = function (responseData) {
  store.user = responseData.user
  const name = store.user.email.split('@', 1)
  $('#welcome-name').html(`Welcome, ${name[0]}!`)
  fadeInWelcome()
  createFeedback(`Successfully signed in!`, `primary`, 400)
  fadeOutAuth()
}

const changePasswordSuccess = function (responseData) {
  $('#formModalCenter').modal('hide')
  createFeedback(`Successfully changed password!`, `info`, 4000)

  $('#pass-change-help').removeClass('red')
  $('#pass-change-help').addClass('muted')
  $('#pass-change-help').html(`Enter both your old and new passwords to make the change.<br>&nbsp;`)
}

const changePasswordFailure = function (responseData) {
  $('#pass-change-help').removeClass('muted')
  $('#pass-change-help').addClass('red')
  $('#pass-change-help').html(`Incorrect Entry. Please enter your correct old and new passwords to make the change.<br>&nbsp;`)
}

const signOutSuccess = function (responseData) {
  store.user = null
  createFeedback(`Successfully signed out!`, `dark`, 4000)
  fadeOutWelcome()
  fadeInAuth()

  // reset board
  const game = new gameLogic.Game(0, 0, 'dummy@game')
  gameUi.renderGame(game, '')
  store.game = null
}

const failure = function (responseData) {
  console.log('Error message: ', responseData)

  createFeedback(`Someting went wrong; please try again.`, `danger`, 4000)
}

const fadeOutSignIn = function () {
  $('.sign-in-div').fadeOut(300)
}

const fadeInSignIn = function () {
  $('.sign-in-div').fadeIn(300)
}

const fadeOutAuth = function () {
  $('.initial-auth-form').fadeOut(300)
}

const fadeInAuth = function () {
  $('.initial-auth-form').fadeIn(300)
}

const fadeOutWelcome = function () {
  $('.welclome-dropdown').fadeOut(300)
}

const fadeInWelcome = function () {
  $('.welclome-dropdown').fadeIn(300)
}

const resetPassChangeForm = function (form) {
  form.find('input:text, input:password, input:file, select, textarea').val('')

  $('#pass-change-help').removeClass('red')
  $('#pass-change-help').addClass('muted')
  $('#pass-change-help').html(`Enter both your old and new passwords to make the change.<br>&nbsp;`)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  createFeedback,
  fadeOutSignIn,
  fadeInSignIn,
  resetPassChangeForm,
  failure
}
