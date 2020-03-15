'use strict'

const store = require('../store')
const gameEngine = require('./engine')

let info

const winnerPlayerOneSuccess = function () {
  $('#message').text('Well played, Professor.')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const winnerFalconSuccess = function () {
  $('#message').text('You lost, Professor.')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const playerOneMove = function () {
  $('#message').text('Your move, Professor.')
  $('#message').removeClass()
  $('#message').addClass('p1Move')
}

const falconMove = function () {
  const position = event.target.id
  $('#message').text(`O to ${event.target.id}`)
  $('#message').removeClass()
  $('#message').addClass('falconMove')
}

const gameDraw = function () {
  $('#message').text('Stalemate, Professor.')
  $('#message').removeClass()
  $('#message').addClass('draw')
}

const invalidMove = function () {
  $('#message').text('Invalid move, Professor.')
  $('#message').removeClass()
  $('#message').addClass('invalidMove')
}

const onCreateGameSuccess = function (data) {
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('New Game Created!')
  console.log('New Game Created: ', data)
  store.game = data.game
}
const onCreateGameFailure = function (error) {
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('Error Creating Game')
  console.log('createGameFailure error is: ', error)
}

const onUpdateBoardSuccess = function (data) {
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Board Updated!')
  console.log(store.game)
}
const onUpdateBoardFailure = function (error) {
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Error Updating Game')
  console.log('updateBoardFailure error is: ', error)
}

module.exports = {
  winnerPlayerOneSuccess,
  winnerFalconSuccess,
  gameDraw,
  playerOneMove,
  falconMove,
  invalidMove,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateBoardSuccess,
  onUpdateBoardFailure,
  info
}
