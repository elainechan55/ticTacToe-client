'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}

const onNewGame = function (event) {
  event.preventDefault()

  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onError)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onPlayerMove = function (event) {
  event.preventDefault()

  const gameIndex = event.target.getAttribute('data-cell-index')
  console.log('gameIndex ' + gameIndex)

  if (store.currentGame.cells[gameIndex] === '') {
    // TODO: alternate x and o (if statement in this `if` statement)
    store.currentGame.cells[gameIndex] = store.nextTurn
    event.target.innerText = store.nextTurn
    store.changeTurn()
    api.playerMove(gameIndex, store.nextTurn, false)
      .then(ui.onPlayerMoveSuccess)
  } else {
    ui.onPlayerMoveError()
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewGame,
  onSignOut,
  onPlayerMove
}
