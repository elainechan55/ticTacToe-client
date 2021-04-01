'use strict'

const onSignUpSuccess = function () {
  console.log('signup success')
  $('#message').text('Sign up successful!')
}

const onError = function () {
  console.log('there was an error')
  $('#message').text('There was an error, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onError
}
