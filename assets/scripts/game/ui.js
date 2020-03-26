'use strict'

const store = require('../store')
const gameEngine = require('./engine')

const onPlayTrue = function (event) {
  $('#console-line-one').text('Choose authentication method:')
  $('#play-game-yes').addClass('hide')
  $('#play-game-no').addClass('hide')
  $('#open-register-form').removeClass('hide')
  $('#open-authenticate-form').removeClass('hide')
}

const onPlayFalse = function (event) {
  $('#console-line-one').text('--- Connection terminated ---')
  $('#play-game-yes').addClass('hide')
  $('#play-game-no').addClass('hide')
  setTimeout(function () {
    window.location.replace("https://www.google.com")
  }, 2250)
}

const onOpenRegister = function (event) {
  $('#sign-up').removeClass('hide')
  $('#sign-in').addClass('hide')
}

const onOpenAuthenticate = function (event) {
  $('#sign-in').removeClass('hide')
  $('#sign-up').addClass('hide')
}

const onCreateGameSuccess = function (data) {
  $('#console-line-one').text('Game initiated. Your move, Professor.')
  $('#console-line-two').text('')
  $('#gameboard').removeClass('hide')
  $('#0').removeClass('hide')
  $('#1').removeClass('hide')
  $('#2').removeClass('hide')
  $('#3').removeClass('hide')
  $('#4').removeClass('hide')
  $('#5').removeClass('hide')
  $('#6').removeClass('hide')
  $('#7').removeClass('hide')
  $('#8').removeClass('hide')
  clearBoard()
  store.game = data
}
const onCreateGameFailure = function (error) {
  $('#console-line-one').text('Game initiation unsuccessful. Please try again.')
  // console.log('Error Creating Game')
  // console.log('createGameFailure error is: ', error)
}

const onCoordinateZero = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to -1, 1.')
    console.log('O to -1, 1.')
  } else {
    $('#console-line-one').text('X to -1, 1.')
    console.log('X to -1, 1.')
  }
}
const onCoordinateOne = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 0, 1.')
  } else {
    $('#console-line-one').text('X to 0, 1.')
  }
}
const onCoordinateTwo = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 1, 1.')
  } else {
    $('#console-line-one').text('X to 1, 1.')
  }
}
const onCoordinateThree = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to -1, 0.')
  } else {
    $('#console-line-one').text('X to -1, 0.')
  }
}
const onCoordinateFour = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 0, 0.')
  } else {
    $('#console-line-one').text('X to 0, 0.')
  }
}
const onCoordinateFive = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 1, 0.')
  } else {
    $('#console-line-one').text('X to 1, 0.')
  }
}
const onCoordinateSix = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to -1, -1.')
  } else {
    $('#console-line-one').text('X to -1, -1.')
  }
}
const onCoordinateSeven = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 0, -1.')
  } else {
    $('#console-line-one').text('X to 0, -1.')
  }
}
const onCoordinateEight = function (event) {
  if (store.player === 'X') {
    $('#console-line-one').text('O to 1, -1.')
  } else {
    $('#console-line-one').text('X to 1, -1.')
  }
}

const onUpdateBoardSuccess = function (data) {
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('success')
  //console.log('Game ID is: ' + store.game.id)
  //console.log(store.game.game.cell)
}
const onUpdateBoardFailure = function (error) {
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('failure')
  // console.log('Error Updating Game')
  // console.log('updateBoardFailure error is: ', error)
}

const onGameStatsAllSuccess = function (store) {
  $('#console-line-two').text(`Total games played: ${store.games.length}`)
  setTimeout(function () {
    $('#console-line-two').text('')
  }, 2000)
}

const onGameStatsAllFailure = function (error) {
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('failure')
  console.log('Error Updating Game')
  console.log('updateBoardFailure error is: ', error)
}

const clearBoard = function () {
  store.player = 'X'
  store.cell.index = undefined
  store.cell.value = ''
  store.game.cells = ['','','','','','','','','']
  store.game.over = false
  store.games = ['']
  $('#0').text('')
  $('#1').text('')
  $('#2').text('')
  $('#3').text('')
  $('#4').text('')
  $('#5').text('')
  $('#6').text('')
  $('#7').text('')
  $('#8').text('')
}

const winnerPlayerOneSuccess = function () {
  $('#console-line-one').text('X has won, Professor.')
  $('#console-line-two').text('Shall we play again?')
}

const winnerFalconSuccess = function () {
  $('#console-line-one').text('O has won, Professor.')
  $('#console-line-two').text('Shall we play again?')
}

const gameDraw = function () {
  $('#console-line-one').text('Stalemate, Professor.')
  $('#console-line-two').text('Shall we play again?')
}

const invalidMoveGP = function () {
  $('#console-line-one').text('Invalid move, Professor.')
  $('#console-line-two').text('Please select another coordinate.')
}

const invalidMove = function () {
  $('#console-line-one').text('Invalid move, Professor.')
  if (store.game.game.over === true) {
    $('#console-line-two').text('The game is over. Shall we play again?')
  } else {
    $('#console-line-two').text('')
  }
}

module.exports = {
  onPlayTrue,
  onPlayFalse,
  onOpenRegister,
  onOpenAuthenticate,
  onCreateGameSuccess,
  onCreateGameFailure,
  onCoordinateZero,
  onCoordinateOne,
  onCoordinateTwo,
  onCoordinateThree,
  onCoordinateFour,
  onCoordinateFive,
  onCoordinateSix,
  onCoordinateSeven,
  onCoordinateEight,
  onUpdateBoardSuccess,
  onUpdateBoardFailure,
  onGameStatsAllSuccess,
  onGameStatsAllFailure,
  clearBoard,
  winnerPlayerOneSuccess,
  winnerFalconSuccess,
  gameDraw,
  invalidMoveGP,
  invalidMove
}
