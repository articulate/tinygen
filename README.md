# tinygen [![npm version](https://img.shields.io/npm/v/@articulate/tinygen.svg)](https://www.npmjs.com/package/@articulate/tinygen)

Tiniest of tiny `base64` uid generators.  Teeny-tiny browser version included, only 624 bytes.

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

## Maintenance

To publish a new version, just:

```
yarn version
npm publish --access public
```

You will be prompted for a new version number, the package will be rebuilt, and the tag pushed to `git` before publishing to `npm`.  The second step is required until [#1694](https://github.com/yarnpkg/yarn/issues/1694) is resolved.
