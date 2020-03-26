'use strict'

const store = require('../store')

// Sign-Up User Interface
const signUpSuccess = function (data) {
  $('#console-line-one').text('Registration Successful.')
  $('#sign-up').trigger('reset')
  $('#sign-up').addClass('hide')
  // console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#console-line-one').text('Registration unsuccessful. Confirm matching credentials.')
  $('#sign-up').trigger('reset')
  // console.log('signUpFailure error is: ', error)
}

// Sign-In User Interface
const signInSuccess = function (data) {
  $('#console-line-one').text('Authentication Successful. Welcome, Professor.')
  $('#sign-in').trigger('reset')
  $('#sign-in').addClass('hide')
  $('#game-stats').removeClass('hide')
  $('#create-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#gameboard').removeClass('hide')
  $('#delta-form').removeClass('hide')
  $('#delta-old').addClass('hide')
  $('#delta-new').addClass('hide')
  $('#delta-submit-facade').removeClass('hide')
  $('#open-register-form').addClass('hide')
  $('#open-authenticate-form').addClass('hide')
  // console.log(data)
  store.user = data.user
  // console.log(store)
}
const signInFailure = function (error) {
  $('#console-line-one').text('Authentication unsuccessful. Please try again.')
  $('#sign-in').trigger('reset')
}

// Change Password User Interface
const onDeltaSubmitFacade = function (event) {
  event.preventDefault()
  $('#console-line-one').text('Update your credentials below, Professor.')
  $('#console-line-two').text('')
  $('#delta-submit-facade').addClass('hide')
  $('#delta-submit-check').removeClass('hide')
  $('#delta-old').removeClass('hide')
  $('#delta-new').removeClass('hide')
  $('#delta-old').removeClass('hide')
  $('#delta-new').removeClass('hide')
  $('#game-stats').addClass('hide')
  $('#create-game').addClass('hide')
  $('#sign-out').addClass('hide')
}
const onDeltaSubmitCheck = function (event) {
  event.preventDefault()
  if ($('#delta-old').val() === '' || $('delta-new').val() === '') {
    $('#console-line-one').text('The form is empty, Professor.')
    $('#console-line-two').text('Please complete both fields.')
  } else {
    $('#console-line-one').text('Update your credentials below, Professor.')
    $('#console-line-two').text('Have you used this password on another website?')
    $('#delta-submit-y').removeClass('hide')
    $('#delta-submit-n').removeClass('hide')
  }
}
const onPasswordCheckYes = function (event) {
  event.preventDefault()
  $('#delta-old').val('')
  $('#delta-new').val('')
  $('#console-line-one').text('Please create a unique password.')
  $('#console-line-two').text('Do not reuse prior credentials.')
  $('#delta-submit-y').addClass('hide')
  $('#delta-submit-n').addClass('hide')
  $('#delta-submit-check').removeClass('hide')
  $('#delta-submit-final').addClass('hide')
}
const onPasswordCheckNo = function (event) {
  event.preventDefault()
  $('#console-line-one').text('Credential check passed.')
  $('#console-line-two').text('You may reauthenticate, Professor.')
  $('#delta-submit-check').addClass('hide')
  $('#delta-submit-final').removeClass('hide')
  $('#delta-submit-y').addClass('hide')
  $('#delta-submit-n').addClass('hide')
}
const changePasswordSuccess = function (data) {
  $('#console-line-one').text('Credential successfully updated.')
  $('#console-line-two').text('')
  $('#delta-submit-final').addClass('hide')
  $('#delta-submit-facade').removeClass('hide')
  $('#delta-old').addClass('hide')
  $('#delta-old').val('')
  $('#delta-new').addClass('hide')
  $('#delta-new').val('')
  $('#game-stats').removeClass('hide')
  $('#create-game').removeClass('hide')
  $('#sign-out').removeClass('hide')
}
const changePasswordFailure = function (error) {
  $('#console-line-one').text('Credential update unsuccessful. Please try again.')
  $('#console-line-two').text('')
  $('#delta-old').val('')
  $('#delta-new').val('')
}

// Sign-Out User Interface
const signOutSuccess = function (data) {
  $('#console-line-one').text('--- Connection terminated. ---')
  $('#console-line-two').text('')
  $('#auth-successful').addClass('hide')
  $('#auth-unsuccessful').addClass('hide')
  $('#choose-opponent').addClass('hide')
  $('#player-move').addClass('hide')
  $('#O-to-0').addClass('hide')
  $('#O-to-1').addClass('hide')
  $('#O-to-2').addClass('hide')
  $('#O-to-3').addClass('hide')
  $('#O-to-4').addClass('hide')
  $('#O-to-5').addClass('hide')
  $('#O-to-6').addClass('hide')
  $('#O-to-7').addClass('hide')
  $('#O-to-8').addClass('hide')
  $('#X-to-0').addClass('hide')
  $('#X-to-1').addClass('hide')
  $('#X-to-2').addClass('hide')
  $('#X-to-3').addClass('hide')
  $('#X-to-4').addClass('hide')
  $('#X-to-5').addClass('hide')
  $('#X-to-6').addClass('hide')
  $('#X-to-7').addClass('hide')
  $('#X-to-8').addClass('hide')
  $('#invalid-move-gp').addClass('hide')
  $('#you-won').addClass('hide')
  $('#you-lost').addClass('hide')
  $('#stalemate').addClass('hide')
  $('#invalid-move-go').addClass('hide')
  $('#play-game-yes').addClass('hide')
  $('#open-register-form').addClass('hide')
  $('#play-game-no').addClass('hide')
  $('#open-authenticate-form').addClass('hide')
  $('#unique-pw-q').addClass('hide')
  $('#unique-pw-r').addClass('hide')
  $('#auth-update-successful').addClass('hide')
  $('#play-again').addClass('hide')
  $('#delta-submit-y').addClass('hide')
  $('#delta-submit-n').addClass('hide')
  $('#play-again-y').addClass('hide')
  $('#play-again-n').addClass('hide')
  $('#sign-up').addClass('hide')
  $('#sign-in').addClass('hide')
  $('#game-stats').addClass('hide')
  $('#delta-form').addClass('hide')
  $('#delta-old').addClass('hide')
  $('#delta-new').addClass('hide')
  $('#delta-submit-facade').addClass('hide')
  $('#delta-submit-check').addClass('hide')
  $('#delta-submit-final').addClass('hide')
  $('#create-game').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#gameboard').addClass('hide')
  $('#0').addClass('hide')
  $('#1').addClass('hide')
  $('#2').addClass('hide')
  $('#3').addClass('hide')
  $('#4').addClass('hide')
  $('#5').addClass('hide')
  $('#6').addClass('hide')
  $('#7').addClass('hide')
  $('#8').addClass('hide')
  setTimeout(function () {
    window.location.replace("https://www.linkedin.com/in/rscottlundgren/")
  }, 2250)
}
const signOutFailure = function (error) {
  $('#falcon-output').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onDeltaSubmitFacade,
  onDeltaSubmitCheck,
  onPasswordCheckYes,
  onPasswordCheckNo,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
