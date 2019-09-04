'use strict'

var Type = require('../type')

module.exports = Type({
  name: 'Discover',
  pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  eagerPattern: /^6(011(0[0-9]|[2-4]|74|7[7-9]|8[6-9]|9[0-9])|4[4-9]|5)/
})
