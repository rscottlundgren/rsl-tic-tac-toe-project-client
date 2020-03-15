'use strict'

// Import/require 'config.js' so we have access to our API's URLs
const config = require('../config')
// Require 'store.js' so that we have access to the user and their data which we
// saved at the outset and throughout their experience logged into the game;
// data accessed will include various game states, number of games played, user
// id, token, and other information
const store = require('../store')

// Assign a 'createGame' function that will create a game with our API when
// called
const createGame = function () {
  console.log('in game api.js')
  // Make an http request and return the promise so we may call '.then/.catch'
  // in 'events.js'
  return $.ajax({
    // Which path we will make the request to (information found in the API
    // documentation)
    url: config.apiUrl + '/games',
    // The http verb we use for our request (information found in the API
    // documentation)
    method: 'POST',
    // Add authorization header, so the API knows who is meking the request -
    // the API knows who we are because the token tells it who we are
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  })
  console.log(store.user.token)
}

// Assign an 'updateGame' function that will update the present game being
// played with the API when it is called - the function call will accept the
// arguments/parameters listed below
const updateBoard = function (position, player, gameOver) {
  console.log(store)
  // Make an http request and return the promise so we may call '.then/.catch'
  // in 'events.js'
  return $.ajax({
    // Which path we will make the request to (information found in the API
    // documentation)
    url: config.apiUrl + '/games/' + store.game.id,
    // The http verb we use for our request (information found in the API
    // documentation)
    method: 'PATCH',
    // Add authorization header, so the API knows who is meking the request -
    // the API knows who we are because the token tells it who we are
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    // The data requested by the API in the documentation in order to make a
    // successful patch request
    data: {
      "game": {
        "cell": {
          "index": store.cell.index,
          "value": store.cell.player
        },
        "over": store.game.over
      }
    }
  })
  console.log('The present game ID is ' + store.game.id)
  console.log('The most recent tile played on the board is ' + store.cell.index)
  console.log('The most recent letter played is ' + store.cell.player)
  console.log('Our present \'game over\' value is ' + store.game.over)
}

module.exports = {
  createGame,
  updateBoard
}
