'use strict'

const store = require('../store')
const gameEngine = require('./engine')

const onCreateGameSuccess = function (data) {
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('success')
  $('.col-4.box').removeClass('player')
  $('.col-4.box').removeClass('falcon')
  $('.col-4.box.zero').css('border-color', 'transparent RGB(51, 255, 51) RGB(51, 255, 51) transparent')
  $('.col-4.box.one').css('border-color', 'transparent RGB(51, 255, 51) RGB(51, 255, 51) RGB(51, 255, 51)')
  $('.col-4.box.two').css('border-color', 'transparent transparent RGB(51, 255, 51) RGB(51, 255, 51)')
  $('.col-4.box.three').css('border-color', 'RGB(51, 255, 51) RGB(51, 255, 51) RGB(51, 255, 51) transparent')
  $('.col-4.box.four').css('border-color', 'RGB(51, 255, 51) RGB(51, 255, 51) RGB(51, 255, 51) RGB(51, 255, 51)')
  $('.col-4.box.five').css('border-color', 'RGB(51, 255, 51) transparent RGB(51, 255, 51) RGB(51, 255, 51)')
  $('.col-4.box.six').css('border-color', 'RGB(51, 255, 51) RGB(51, 255, 51) transparent transparent')
  $('.col-4.box.seven').css('border-color', 'RGB(51, 255, 51) RGB(51, 255, 51) transparent RGB(51, 255, 51)')
  $('.col-4.box.eight').css('border-color', 'RGB(51, 255, 51) transparent transparent RGB(51, 255, 51)')
  // clearBoard()
  console.log('New Game Created!')
  console.log('New Game Created: ', data)
  store.game = data
}

const onCreateGameFailure = function (error) {
  $('#falcon-output').removeClass()
  $('.col-4.box').removeClass('player')
  $('.col-4.box').removeClass('falcon')
  $('#falcon-output').addClass('failure')
  console.log('Error Creating Game')
  console.log('createGameFailure error is: ', error)
}

const playerOneMove = function () {
  $('#falcon-output').text('Your move, Professor.')
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('p1Move')
}

const falconMove = function () {
  const position = event.target.id
  $('#falcon-output').text(`O to ${event.target.id}`)
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('falconMove')
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
  console.log('Error Updating Game')
  console.log('updateBoardFailure error is: ', error)
}

const onGameStatsAllSuccess = function (store) {
  $('#falcon-output').text('You have played this many games: ' + store.games.length)
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('success')
  console.log('All Games Collected!')
  console.log(store.games.length)
  console.log(store.games)
}
const onGameStatsAllFailure = function (error) {
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('failure')
  console.log('Error Updating Game')
  console.log('updateBoardFailure error is: ', error)
}

const clearBoard = function () {
  store.player = 'X'
//  store.cell.index = undefined
//  store.cell.value = ''
//  store.game.cells = ['','','','','','','','','']
//  store.game.over = false
//  store.games = ['']
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
  $('#falcon-output').text('Well played, Professor.')
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('success')
}

const winnerFalconSuccess = function () {
  $('#falcon-output').text('You lost, Professor.')
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('failure')
}

const gameDraw = function () {
  $('#falcon-output').text('Stalemate, Professor.')
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('draw')
}

const invalidMove = function () {
  $('#falcon-output').text('Invalid move, Professor.')
  $('#falcon-output').removeClass()
  $('#falcon-output').addClass('invalidMove')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  playerOneMove,
  falconMove,
  onUpdateBoardSuccess,
  onUpdateBoardFailure,
  onGameStatsAllSuccess,
  onGameStatsAllFailure,
  clearBoard,
  winnerPlayerOneSuccess,
  winnerFalconSuccess,
  gameDraw,
  invalidMove
}
