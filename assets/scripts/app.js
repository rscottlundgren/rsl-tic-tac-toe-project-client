'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// Require authorization events file
const authEvents = require('./auth/events')
// Require game engine file
const gameEngine = require('./game/engine')
// Require game events file
const gameEvents = require('./game/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Add event listener for our "Sign Up" form
  $('#sign-up').on('submit', authEvents.onSignUp)
  // Add event listener for our "Sign In" form
  $('#sign-in').on('submit', authEvents.onSignIn)
  // Add event listener for our "Change Password" form
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Add event listener for our "Sign-Out" button
  $('#sign-out').on('submit', authEvents.onSignOut)
  // Add event listener for our "Create Game" button
  $('#create-game').on('submit', gameEvents.onCreateGame)
  // Add event listener to update our board with every click of a game tile
  $('.square').on('click', gameEvents.onUpdateBoard)
  // Add event listener to toggle the player with every click of a game tile
  $('.square').on('click', gameEngine.togglePlayer)
})
