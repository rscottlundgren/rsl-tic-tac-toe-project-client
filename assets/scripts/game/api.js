'use strict'

const config = require('../config')
const store = require('../store')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  })
}

const updateBoard = function (gameData) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameData
  })
}

const getStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
  })
}

module.exports = {
  createGame,
  updateBoard,
  getStats
}
