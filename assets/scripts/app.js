'use strict'

const authEvents = require('./auth/events')
const gameEngine = require('./game/engine')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#create-game').on('submit', gameEvents.onCreateGame)
  $('.col-4.box').on('click', gameEngine.togglePlayer)
  $('#game-stats').on('click', gameEvents.onGameStats)
})
