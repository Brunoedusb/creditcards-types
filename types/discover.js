'use strict'

var Type = require('../type')

module.exports = Type({
  name: 'Discover',
  pattern: /^6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})$/,
  eagerPattern: /^6(?:011|5[0-9]{2})[0-9]{12}|62212[6-9]|6221[3-9]|622[1-8]|62291|62292[1-5]/
})
