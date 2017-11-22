# babel-plugin-console-with-loc
[![Build Status](https://travis-ci.org/akameco/babel-plugin-console-with-loc.svg?branch=master)](https://travis-ci.org/akameco/babel-plugin-console-with-loc)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> babel plugin for console.log with loc


## Install

npm:

```
$ npm install --save-dev babel-plugin-console-with-loc
```

yarn:
```
$ yarn add --dev babel-plugin-console-with-loc
```


## Usage

.babelrc

```js
{
  "plugins": ["console-with-loc"]
}
```

## Examples

```js
console.log('hello world');

      ↓ ↓ ↓ ↓ ↓ ↓

console.log('{\\"start\\":{\\"line\\":1,\\"column\\":0},\\"end\\":{\\"line\\":1,\\"column\\":26}}', 'hello world');
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/typed-assign/commits?author=akameco "Code") [📖](https://github.com/akameco/typed-assign/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/typed-assign/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
