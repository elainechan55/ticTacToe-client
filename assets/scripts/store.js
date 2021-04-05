'use strict'

// in store: user, currentGame
/*
{
  "user": {
    "_id": "an example id",
    "email": "an@example.com",
    "createdAt": "an example date",
    "updatedAt": "an example date",
    "__v":0,
    "token": "<token>"
  }
}
{
  currentGame = {
    "cells": ["x","","","","","","","",""],
    "over": false,
    "_id": "5e823ba98929cc4e95e2f5d9",
    "owner": "5e82311c8929cc4e95e2f5d8",
    "createdAt": "2020-03-30T18:34:17.772Z",
    "updatedAt": "2020-03-30T18:46:41.383Z",
    "__v": 1
  }
}
*/
const store = {
  nextTurn: 'X', // works for new games. TODO: refactor: x and o count
  changeTurn: function () {
    if (this.nextTurn === 'X') {
      this.nextTurn = 'O'
    } else {
      this.nextTurn = 'X'
    }
  },
  // given true or false
  isGameOver: function () {
    return checkLine(0, 1, 2) ||
      checkLine(3, 4, 5) ||
      checkLine(6, 7, 8) ||
      checkLine(0, 3, 6) ||
      checkLine(1, 4, 7) ||
      checkLine(2, 5, 8) ||
      checkLine(0, 4, 8) ||
      checkLine(2, 4, 6)
  }
}

function checkLine (ind1, ind2, ind3) {
  console.log(store.currentGame.cells[ind1])
  if (store.currentGame.cells[ind1] === 'X' &&
      store.currentGame.cells[ind2] === 'X' &&
      store.currentGame.cells[ind3] === 'X') {
    return true
  } else if (store.currentGame.cells[ind1] === 'O' &&
      store.currentGame.cells[ind2] === 'O' &&
      store.currentGame.cells[ind3] === 'O') {
    return true
  }
  return false
}

module.exports = store
