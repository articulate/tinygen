# tinygen [![npm version](https://img.shields.io/npm/v/@articulate/tinygen.svg)](https://www.npmjs.com/package/@articulate/tinygen)

Tiniest of tiny `base64` uid generators.  Teeny-tiny browser version included.

## API

```haskell
tinygen :: Number -> String
```

#### Parameters

- Number `len` <br/>
  Desired length of `id`. Defaults to `16`.

#### Returns

- String `id` <br/>
  A `base64` random uid.

```js
const tinygen = require('@articulate/tinygen')

tinygen()   // => "K4UP_gkFtzHMt5TN"
tinygen(32) // => "4Z65y6VjtIaid-PpG6eSnzJ5P7lZwoNI"
```

## Publishing

```
yarn version
yarn publish
```
