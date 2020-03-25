'use strict'

const store = require('../store')
const gameUI = require('./ui')
const gameAPI = require('./api')

// Check Winner Function
const isWinner = function (staticBoard) {
  //Top Row Check
  // If the game board at index[0] is not an empty string & the value stored in index[0] matches indices[1] & [2]
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[1] && staticBoard[1] === staticBoard[2] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[0] is 'X'
    if (staticBoard[0] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[0] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Middle Row Check
  // If the game board at index[3] is not an empty string & the value stored in index[3] matches indices[4] & [5]
  if (staticBoard[3] !== '' && staticBoard[3] === staticBoard[4] && staticBoard[4] === staticBoard[5] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[3] is 'X'
    if (staticBoard[3] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[3] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Bottom Row Check
  // If the game board at index[6] is not an empty string & the value stored in index[6] matches indices[7] & [8]
  if (staticBoard[6] !== '' && staticBoard[6] === staticBoard[7] && staticBoard[7] === staticBoard[8] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[6] is 'X'
    if (staticBoard[6] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[6] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Left Column Check
  // If the game board at index[0] is not an empty string & the value stored in index[0] matches indices[3] & [6]
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[3] && staticBoard[3] === staticBoard[6] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[0] is 'X'
    if (staticBoard[0] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[0] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Middle Column Check
  // If the game board at index[1] is not an empty string & the value stored in index[0] matches indices[4] & [7]
  if (staticBoard[1] !== '' && staticBoard[1] === staticBoard[4] && staticBoard[4] === staticBoard[7] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[1] is 'X'
    if (staticBoard[1] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[1] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Right Column Check
  // If the game board at index[2] is not an empty string & the value stored in index[2] matches indices[5] & [8]
  if (staticBoard[2] !== '' && staticBoard[2] === staticBoard[5] && staticBoard[5] === staticBoard[8] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[2] is 'X'
    if (staticBoard[2] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[2] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Top Left to Bottom Right Diagonal Check
  // If the game board at index[0] is not an empty string & the value stored in index[0] matches indices[4] & [8]
  if (staticBoard[0] !== '' && staticBoard[0] === staticBoard[4] && staticBoard[4] === staticBoard[8] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[0] is 'X'
    if (staticBoard[0] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[0] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
  // Top Left to Bottom Right Diagonal Check
  // If the game board at index[2] is not an empty string & the value stored in index[2] matches indices[4] & [6]
  if (staticBoard[2] !== '' && staticBoard[2] === staticBoard[4] && staticBoard[4] === staticBoard[6] ) {
    // Change the value of "store.game.game.over" to true as the game is over
    store.game.game.over = true
    // If the value stored at index[2] is 'X'
    if (staticBoard[2] === 'X') {
      // Run the "winnerPlayerOneSuccess" function stored in gameUI
      gameUI.winnerPlayerOneSuccess()
    // else, if the value stored at index[2] is 'O'
    } else {
      // Run the "winnerFalconSuccess" function stored in gameUI
      gameUI.winnerFalconSuccess()
    }
  }
}

// Check Tie Function
const isTie = function (staticBoard) {
  for (let i = 0; i < staticBoard.length; i++) {
    // If the index checked returns an empty string, escape
    if (store.game.game.cells[i] === '') return
  }
  // If all indices have been checked and contain a value AND if the value
  // stored in store.game.game.over still remains false
  if (store.game.game.over === false) {
    // Fun the "gameDraw" function stored in gameUI
    gameUI.gameDraw()
  }
}

// Matched Move Function (for communicating coordinates)
// const matchedMove = function () {
//   if (clickedTile === 0) {
//     gameUI.onCoordinateZero()
//   } else if (clickedTile === 1) {
//     gameUI.onCoordinateOne()
//   } else if (clickedTile === 2) {
//     gameUI.onCoordinateTwo()
//   } else if (clickedTile === 3) {
//     gameUI.onCoordinateThree()
//   } else if (clickedTile === 4) {
//     gameUI.onCoordinateFour()
//   } else if (clickedTile === 5) {
//     gameUI.onCoordinateFive()
//   } else if (clickedTile === 6) {
//     gameUI.onCoordinateSix()
//   } else if (clickedTile === 7) {
//     gameUI.onCoordinateSeven()
//   } else {
//     gameUI.onCoordinateEight()
//   }
// }

// Player Switch++ Function
const togglePlayer = function (event) {
  // Assign value stored at "store.game.game.over" to "gameOver" variable
  const gameOver = store.game.game.over
  // Assign value stored when a cell is clicked to the "cellText" variable
  const cellText = $(event.target).text()
  // Assign id stored when a cell is clicked to the "clickedTile" variable
  const clickedTile = event.target.id
  // If the value stored in cellText is either an 'X' or an 'O'
  if (cellText === 'X' || cellText === 'O') {
    // Run the "invalidMoveGP" function stored in gameUI
    gameUI.invalidMoveGP()
    // Escape
    return
  // If the above passes, if the value stored in "store.game.game.over" is true
  } else if (store.game.game.over === true) {
    // Run the "invalidMoveGP" function stored in gameUI
    gameUI.invalidMoveGP()
    // Escape
    return
  // If the above passes, if the value stored in "store.player" is 'X'
  } else if (store.player === 'X') {
    // Place that value in the tile that was clicked
    $(event.target).text(store.player)
    // Store the value collected in clickedTile to store.cell.index
    store.cell.index = clickedTile
    // Store the value collected in store.player to store.cell.value
    store.cell.value = store.player
    // Insert the value in store.player into the index of the
    // store.game.game.cells array that matches the number stored in clickedTile
    store.game.game.cells[clickedTile] = store.player
    // Reassign the value at store.player to 'O'
    store.player = 'O'
    // Print the string to #console-line-one
    $('#console-line-one').text('Place the next character, Professor.')
    // print the string to #console-line-two
    $('#console-line-two').text('')
  // Else, if the value stored in "store.player" is 'O'
  } else {
    // Place that value in the tile that was clicked
    $(event.target).text(store.player)
    // Store the value collected in clickedTile to store.cell.index
    store.cell.index = clickedTile
    // Store the value collected in store.player to store.cell.value
    store.cell.value = store.player
    // Insert the value in store.player into the index of the
    // store.game.game.cells array that matches the number stored in clickedTile
    store.game.game.cells[clickedTile] = store.player
    // Reassign the value at store.player to 'X'
    store.player = 'X'
    // Print the string to #console-line-one
    $('#console-line-one').text('Your move, Professor.')
    // print the string to #console-line-two
    $('#console-line-two').text('')
  }
  // Run the isWinner function using the array located at store.game.game.cells
  isWinner(store.game.game.cells)
  // Run the isTie function using the array located at store.game.game.cells
  isTie(store.game.game.cells)
  // Run the updateBoard function stored in the gameAPI using the values in the
  // object below
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

module.exports = {
  // matchedMove,
  togglePlayer,
  isTie,
  isWinner
}
