'use strict'

const store = require('../store')
const ui = require('./ui')
const gameAPI = require('./api')

let staticBoard = store.game.cells

const noBudgie = function () {
  const gameOver = store.game.game.over
  const cellText = $(event.target).text()
  if (gameOver === true) {
    ui.invalidMove()
    return
  } else if (cellText !== '') {
    ui.invalidMove()
    return
  }
}

const isWinner = function (staticBoard) {
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[1] && staticBoard[1] === staticBoard[2] ) {
    store.game.game.over = true
    if (staticBoard[0] === 'X') {
      ui.winnerPlayerOneSuccess()
      noBudgie()
    } else {
      ui.winnerFalconSuccess()
      noBudgie()
    }
  }
  if (staticBoard[3] !== '' && staticBoard[3] === staticBoard[4] && staticBoard[4] === staticBoard[5] ) {
    store.game.game.over = true
    if (staticBoard[3] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[6] !== '' && staticBoard[6] === staticBoard[7] && staticBoard[7] === staticBoard[8] ) {
    store.game.game.over = true
    if (staticBoard[6] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[3] && staticBoard[3] === staticBoard[6] ) {
    store.game.game.over = true
    if (staticBoard[0] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[1] !== '' && staticBoard[1] === staticBoard[4] && staticBoard[4] === staticBoard[7] ) {
    store.game.game.over = true
    if (staticBoard[1] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[2] !== '' && staticBoard[2] === staticBoard[5] && staticBoard[5] === staticBoard[8] ) {
    store.game.game.over = true
    if (staticBoard[2] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[4] && staticBoard[4] === staticBoard[8] ) {
    store.game.game.over = true
    if (staticBoard[0] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
  if (staticBoard[2] !== '' && staticBoard[2] === staticBoard[4] && staticBoard[4] === staticBoard[6] ) {
    store.game.game.over = true
    if (staticBoard[2] === 'X') {
      ui.winnerPlayerOneSuccess()
    } else {
      ui.winnerFalconSuccess()
    }
  }
}

const togglePlayer = function (event) {
  noBudgie()
  const clickedTile = event.target.id
  if (store.player === 'X') {
    $(event.target).text(store.player)
    $(event.target).addClass('player')
    store.cell.index = clickedTile
    store.cell.value = store.player
    store.game.game.cells[clickedTile] = store.player
    ui.playerOneMove()
    store.player = 'O'
  } else {
    $(event.target).text(store.player)
    $(event.target).addClass('falcon')
    store.cell.index = clickedTile
    store.cell.value = store.player
    store.game.game.cells[clickedTile] = store.player
    ui.falconMove()
    store.player = 'X'
  }
  isWinner(staticBoard)
  isTie(staticBoard)
  gameAPI.updateBoard({
    'game': {
      'cell': {
        'index': clickedTile,
        'value': store.cell.value
      },
        'over': store.game.game.over
    }
  })
}

const isTie = function (staticBoard) {
  const gameOver = store.game.game.over
  for (let i = 0; i < staticBoard.length; i++) {
    if (store.game.game.cells[i] === '') return
  }
  if (store.game.game.over === false) {
    ui.gameDraw()
  }
}

module.exports = {
  noBudgie,
  togglePlayer,
  isTie,
  isWinner
}
