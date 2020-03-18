'use strict'

let player = 'X'

const cell = {
  index: undefined,
  value: ''
}

// const wins = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

const game = {
  cells: ['','','','','','','','',''],
  over: false
}

const games = ['']

module.exports = {
  player,
  cell,
  game,
  games
  // wins
}
