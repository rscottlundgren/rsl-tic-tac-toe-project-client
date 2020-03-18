'use strict'

const store = require('../store')

// Sign-Up User Interface
const signUpSuccess = function (data) {
  $('#falcon-output').text('Signed up successfully')
  $('#sign-up').trigger('reset')
  $('.hide').show()
  $('.show').hide()
  console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#falcon-output').text('Error on sign up')
  $('#sign-up').trigger('reset')
  console.log('signUpFailure error is: ', error)
}

// Sign-In User Interface
const signInSuccess = function (data) {
  $('#falcon-output').text('Signed in successfully')
  $('#sign-in').trigger('reset')
  $('.hide').show()
  $('.show').hide()
  console.log(data)
  store.user = data.user
  console.log(store)
}
const signInFailure = function (error) {
  $('#falcon-output').text('Error on sign in')
  $('#sign-in').trigger('reset')
}

// Change Password User Interface
const changePasswordSuccess = function (data) {
  $('#falcon-output').text('Password changed successfully')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#falcon-output').text('Error on change password')
  $('#change-password').trigger('reset')
}

// Sign-Out User Interface
const signOutSuccess = function (data) {
  $('#falcon-output').text('Signed out successfully')
  $('.hide').hide()
  $('.show').show()
  $('.col-4.box.zero').css('border-color', 'black')
  $('.col-4.box.zero').text('')
  $('.col-4.box.one').css('border-color', 'black')
  $('.col-4.box.one').text('')
  $('.col-4.box.two').css('border-color', 'black')
  $('.col-4.box.two').text('')
  $('.col-4.box.three').css('border-color', 'black')
  $('.col-4.box.three').text('')
  $('.col-4.box.four').css('border-color', 'black')
  $('.col-4.box.four').text('')
  $('.col-4.box.five').css('border-color', 'black')
  $('.col-4.box.five').text('')
  $('.col-4.box.six').css('border-color', 'black')
  $('.col-4.box.six').text('')
  $('.col-4.box.seven').css('border-color', 'black')
  $('.col-4.box.seven').text('')
  $('.col-4.box.eight').css('border-color', 'black')
  $('.col-4.box.eight').text('')
}
const signOutFailure = function (error) {
  $('#falcon-output').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
