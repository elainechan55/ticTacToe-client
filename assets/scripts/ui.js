'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  console.log('signup success')
  $('#message').text('Sign up successful!')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log('signin success')
  $('#message').text('Sign in successful!')
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-in').trigger('reset')
  $('#new-game').show()
  $('#sign-out').show()
}

const onChangePasswordSuccess = function () {
  console.log('password change success')
  $('#message').text('Password change successful!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  console.log('signout success')
  $('#message').text('Sign out successful')
  store.user = null
  $('#sign-up').show()
  $('#sign-in').show()
}

const onNewGameSuccess = function (response) {
  // store responses in currentGame property
  // .game bc from POST
  store.currentGame = response.game
  $('.game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#message').text('X, make a move')
}

const onError = function (response) {
  console.log('there was an error')
  $('#message').text('There was an error, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onError
}
