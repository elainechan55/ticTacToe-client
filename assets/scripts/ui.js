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
  $('#sign-in').trigger('reset')
  $('.initial-forms').hide()
  $('#settings').css('visibility', 'visible')
  $('#new-game').show()
  $('#sign-out').show()
}

const onChangePasswordClick = function () {
  $('#change-password').show()
}

const onChangePasswordSuccess = function () {
  console.log('password change success')
  $('#message').text('Password change successful!')
  $('#change-password').trigger('reset')
  $('#change-password').hide()
}

const onSignOutSuccess = function () {
  console.log('signout success')
  $('#message').text('Sign out successful')
  store.user = null
  $('.game-board').hide()
  $('.initial-forms').show()
  $('#new-game').hide()
  $('#settings').css('visibility', 'hidden')
}

const onNewGameSuccess = function (response) {
  // store responses in currentGame property
  // .game bc from POST API response
  store.currentGame = response.game
  store.nextTurn = 'X'
  $('.game-board').show()
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
  onChangePasswordClick,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  promptNextTurn,
  onPlayerMoveError,
  onSetWinner,
  onSetTie,
  onError
}
