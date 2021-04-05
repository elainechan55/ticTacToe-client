'use strict'

// in store: user, currentGame
/*
currentGame = {
  "cells": ["x","","","","","","","",""],
  "over": false,
  "_id": "5e823ba98929cc4e95e2f5d9",
  "owner": "5e82311c8929cc4e95e2f5d8",
  "createdAt": "2020-03-30T18:34:17.772Z",
  "updatedAt": "2020-03-30T18:46:41.383Z",
  "__v": 1
}
*/
const store = {
  nextTurn: 'X', // works for new games. need to refactor: x and o count
  changeTurn: function () {
    if (this.nextTurn === 'X') {
      this.nextTurn = 'O'
    } else {
      this.nextTurn = 'X'
    }
  }
}

module.exports = store
