'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const gameAPI = require('./api')
const gameUI = require('./ui')
const store = require('../store')

const onCreateGame = function (event) {
  event.preventDefault()
  gameAPI.createGame()
    .then(gameUI.onCreateGameSuccess)
    .catch(gameUI.onCreateGameFailure)
}

const onUpdateBoard = function (gameData) {
  console.log(gameData)
  event.preventDefault()
  gameAPI.updateBoard({
    gameData
  })
  .then(gameUI.onUpdateBoardSuccess)
  .catch(gameUI.onUpdateBoardFailure)
}

const onGameStats = function (event) {
  event.preventDefault()
  gameAPI.getStats()
    .then(gameUI.onGameStatsAllSuccess)
    .catch(gameUI.onGameStatsAllFailure)
}

const surpriseLoad = function (event) {
  window.open("http://www.google.com","_self")
}

const surprise = function(event) {
  event.preventDefault()
  setTimeout(surpriseLoad(), 100)
}


module.exports = {
  onCreateGame,
  onUpdateBoard,
  onGameStats,
  surprise
}
