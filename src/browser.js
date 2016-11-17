const chars  = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      crypto = window.crypto || window.msCrypto

const tinygen = (len=16) => {
  const arr = new Uint32Array(len)
  crypto.getRandomValues(arr)
  return Array.from(arr).map(x => chars[x % 64]).join('')
}

const unsupported = () => {
  throw new Error('Secure random number generation not supported by this browser.')
}

module.exports = crypto && crypto.getRandomValues ? tinygen : unsupported
