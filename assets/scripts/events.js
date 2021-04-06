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

  if (store.currentGame.over === true) {
    return
  }

  const gameIndex = event.target.getAttribute('data-cell-index')
  console.log('gameIndex ' + gameIndex)

  if (store.currentGame.cells[gameIndex] === '') {
    store.currentGame.cells[gameIndex] = store.nextTurn
    event.target.innerText = store.nextTurn

    // let over = false
    // has true value
    const isThereAWinner = store.isThereAWinner()
    const isBoardFull = store.currentGame.cells.every(element => element !== '')
    if (isThereAWinner) {
      store.currentGame.over = true
      ui.onSetWinner(store.nextTurn)
    } else if (isBoardFull) {
      store.currentGame.over = true
      ui.onSetTie()
    }

    api.playerMove(gameIndex, store.nextTurn, store.currentGame.over)

    // if (!isThereAWinner && !isBoardFull) {
    if (store.currentGame.over === false) {
      store.changeTurn()
      ui.promptNextTurn()
    }
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
