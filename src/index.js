const chars  = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      crypto = require('crypto')

const tinygen = (len=16) => {
  const arr = new Uint8Array(len)
  arr.set(crypto.randomBytes(len))
  return arr.reduce((id, x) => id + chars[x % 64], '')
}

module.exports = tinygen
