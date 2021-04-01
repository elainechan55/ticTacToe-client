'use strict'

const config = require('../config')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrls + '/sign-up',
    data: formData
  })
}

module.exports = {
  signUp
}
