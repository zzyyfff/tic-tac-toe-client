'use strict'

const store = require('../store')

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
  createFeedback(`Successfully signed in!`, `primary`, 400)
  fadeOutAuth()
}

const changePasswordSuccess = function (responseData) {
  createFeedback(`Successfully changed password!`, `info`, 4000)
}

const signOutSuccess = function (responseData) {
  store.user = null
  createFeedback(`Successfully signed out!`, `dark`, 4000)
  fadeInAuth()
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

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  createFeedback,
  fadeOutSignIn,
  fadeInSignIn,
  failure
}
