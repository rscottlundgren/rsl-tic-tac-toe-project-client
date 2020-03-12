'use strict'

const store = require('../store')

// Player defaults to 1 (User)
const togglePlayer = function () {
  // If player's value is odd
  if (player =) {
    // Player click's desired box, displays X
    $(event.target).text('X')
    //
    player = true
    console.log(player)
  } else {
    $(event.target).text('O')
    player = false
    console.log(player)
  }
}

//
const isOdd = (player) => {
  return player % 2 === 1
}
