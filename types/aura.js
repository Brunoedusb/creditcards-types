'use strict'

var Type = require('../type')

module.exports = Type({
    name: 'Aura',
    digits: 16,
    pattern: /^(5078\d{2})(\d{2})(\d{11})$/,
    eagerPattern: /^50/
})
