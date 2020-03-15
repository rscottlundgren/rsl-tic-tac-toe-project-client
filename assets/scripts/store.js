'use strict'

// Set default value of player to 'X'
let player = 'X'

// Create variable 'cell' to hold the key/value pairs that will be used for the
// 'update-game.sh' curl script and ajax call
const cell = {
  // Key/Value pair created for the index that was changed in the object by the
  // player's click that will be needed during ajax call to update the game as
  // requested
  index: undefined,
  // Key/Value pair for the value that was entered into the index created in an
  // object that will be needed during ajax call to update the game as requested
  value: ''
}

// Create variable 'game' that will hold the key/value pairs that will be used
// for both ajax calls and for other features of the game (i.e. determining win,
// loss, and tie states, etc.)
const game = {
  // Key/Value pair that will hold the static status of the entire board
  // throughout game player
  cells: ['','','','','','','','',''],
  // Key/Value pair that will hold the overall 'game state' for determination of
  // whether the game has been won, lost, or tied
  over: false
}

module.exports = {
  player,
  cell,
  game
}
