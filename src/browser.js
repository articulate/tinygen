const chars  = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz',
      crypto = global.crypto || global.msCrypto,
      { floor, random } = Math

const pseudogen = (len=16) => {
  var id = ''
  while (id.length < len) id += chars[floor(random() * chars.length)]
  return id
}

const tinygen = (len=16) => {
  var arr = new Uint8Array(len)
  crypto.getRandomValues(arr)
  // IE11 Uint8Array does not have `reduce` so we cast to Array
  if (!arr.reduce) arr = [].slice.call(arr)
  return arr.reduce((id, x) => id + chars[x % 64], '')
}

module.exports = crypto && crypto.getRandomValues ? tinygen : pseudogen
