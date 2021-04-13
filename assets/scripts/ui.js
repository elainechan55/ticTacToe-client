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
  $('#change-password').show()
}

const onChangePasswordSuccess = function () {
  console.log('password change success')
  $('#message').text('Password change successful!')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function () {
  store.user = null
  console.log('signout success')
  $('#message').text('Sign out successful')
  $('.game-board').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}

const onNewGameSuccess = function (response) {
  // store responses in currentGame property
  // .game bc from POST API response
  store.currentGame = response.game
  store.nextTurn = 'X'
  $('.game-board').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#message').text('X, make a move')
  // find game board cells and clear
  $('.col-4').empty()
}

const promptNextTurn = function () {
  $('#message').text(`${store.nextTurn}, make a move`)
}

const onPlayerMoveError = function (response) {
  $('#message').text('Invalid space chosen, choose another.')
}

const onSetWinner = function (winner) {
  $('#message').text(`${winner} is the winner!`)
}

const onSetTie = function () {
  $('#message').text('It\'s a tie!')
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
  promptNextTurn,
  onPlayerMoveError,
  onSetWinner,
  onSetTie,
  onError
}
