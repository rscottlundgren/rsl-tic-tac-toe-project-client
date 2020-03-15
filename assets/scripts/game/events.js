'use strict'

// Import getFormFields so we can get the data out of the forms
const getFormFields = require('../../../lib/get-form-fields')
// Import API, so we can make http requests to the API
const gameAPI = require('./api')
// Import UI, so we can update the page when something successful or a failure
// happens
const gameUI = require('./ui')

// Assigned 'onCreateGame' to an event function
const onCreateGame = function (event) {
  // Prevents the form submit default behavior which is to refresh to page
  event.preventDefault()
  console.log('Creating Game')
  // Make a request to our game API to create a game, pass it the necessary form
  // data which, in this case, is the game that we want to create
  gameAPI.createGame()
    // If we were able to create our game successfully, we'll update the UI (aka
    // webpage console) to show that it was successful
    .then(gameUI.onCreateGameSuccess)
    // Otherwise, we weren't able to create the game, so this will let users
    // know that there was an error
    .catch(gameUI.onCreateGameFailure)
}

// Assigned 'onUpdateBoard' to a data function
const onUpdateBoard = function (data) {
  console.log(data)
  // Prevents the form submit default behavior which is to refresh to page
  event.preventDefault()
  console.log('Updating Board')
  // Make a request to our game API to update a game, pass it the necessary form
  // data which, in this case, are the changes to the game board at each instant
  // when the game changes
  gameAPI.updateBoard()
    // If we were able to update our game successfully, we'll update the UI (aka
    // webpage) to show that it was successful
    .then(gameUI.onUpdateBoardSuccess)
    // Otherwise, we weren't able to update the game, so this will let users
    // know that there was an error
    .catch(gameUI.onUpdateBoardFailure)
}

module.exports = {
  onCreateGame,
  onUpdateBoard
}
