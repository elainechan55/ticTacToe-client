'use strict'

const store = require('./store')

const onSignUpSuccess = function () {
  console.log('signup success')
  $('#message').text('Sign up successful!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  console.log('signin success')
  $('#message').text('Sign in successful!')
}

const onChangePasswordSuccess = function () {
  console.log('password change success')
  $('#message').text('Password change successful!')
}

const onSignOutSuccess = function () {
  console.log('signout success')
  $('#message').text('Sign out successful')
  store.user = null
}

const onError = function () {
  console.log('there was an error')
  $('#message').text('There was an error, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onError
}
