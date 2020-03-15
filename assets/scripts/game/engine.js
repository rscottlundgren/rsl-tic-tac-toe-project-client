'use strict'

// Import 'store.js' to access the two game objects contained there
const store = require('../store')
// Import 'ui.js' so we can update the page when success/failure occurs
const ui = require('./ui')

// Assigned 'staticBoard' variable for easy testing trough function action
let staticBoard = store.game.cells

// Declared an 'isWinner' function to evaluate the game board for a winner
const isWinner = function (staticBoard) {

  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] ) {
    store.game.over = true
    if (store.game.cells[0] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[3] !== '' && store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] ) {
    store.game.over = true
    if (store.game.cells[3] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[6] !== '' && store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] ) {
    store.game.over = true
    if (store.game.cells[6] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] ) {
    store.game.over = true
    if (store.game.cells[0] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[1] !== '' && store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] ) {
    store.game.over = true
    if (store.game.cells[1] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] ) {
    store.game.over = true
    if (store.game.cells[2] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[0] !== '' && store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] ) {
    store.game.over = true
    if (store.game.cells[0] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (store.game.cells[2] !== '' && store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] ) {
    store.game.over = true
    if (store.game.cells[2] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
}

const isTie = function (staticBoard) {
  for (let i = 0; i < staticBoard.length; i++) {
    if (store.game.cells[i] === '') return
  }
  if (store.game.over === false) {
    ui.gameDraw()
  }
}

const togglePlayer = function () {
  const cellText = $(event.target).text()
  if (store.game.over === true) return
  if (cellText === 'X' || cellText === 'O') {
    ui.invalidMove()
    return
  } else if (store.player === 'X') {
    $(event.target).text(store.player)
    store.position = event.target.id
    store.cell.index = event.target.id
    store.cell.value = store.player
    store.game.cells[store.position] = store.player
    ui.playerOneMove()
    isWinner(staticBoard)
    isTie(staticBoard)
    store.player = 'O'
  } else {
    $(event.target).text(store.player)
    store.position = event.target.id
    store.cell.index = event.target.id
    store.cell.value = store.player
    store.game.cells[store.position] = store.player
    ui.falconMove()
    isWinner(staticBoard)
    isTie(staticBoard)
    store.player = 'X'
  }
}

module.exports = {
  togglePlayer,
  isWinner,
  isTie
}
