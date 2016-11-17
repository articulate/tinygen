const crypto = require('crypto')

const clean = str =>
  str.replace(/\//g, '_').replace(/\+/g, '-').replace(/=/g, '')

const numBytes = len =>
  Math.log(Math.pow(64, len)) / Math.log(2) / 8

const tinygen = (len=16) =>
  clean(crypto.randomBytes(numBytes(len)).toString('base64')).substr(0, len)

module.exports = tinygen
