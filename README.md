# linear-scale-to-number

[![Build Status](https://travis-ci.org/javiercejudo/linear-scale-to-number.svg)](https://travis-ci.org/javiercejudo/linear-scale-to-number)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/linear-scale-to-number/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/linear-scale-to-number?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/linear-scale-to-number/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/linear-scale-to-number)

Ensures a linear scale has numbers

## Install

    npm i linear-scale-to-number

## Usage

```js
var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var scaleToDecimal = require('linear-scale-to-number')(Decimal);

scaleToDecimal([new Decimal('32'), new Decimal('33.8')]);
// => [32, 33.8]
```

For the opposite behaviour, check [linear-scale-to-decimal](https://github.com/javiercejudo/linear-scale-to-decimal).

## Related projects

- [linear-presets](https://github.com/javiercejudo/linear-presets): linear presets for common units.
- [linear-converter](https://github.com/javiercejudo/linear-converter): flexible linear converter.
