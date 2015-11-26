/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('linear-arbitrary-precision')(require('floating-adapter'));
var scaleToNumber = require('../src/');
var isFunction = require('lodash.isfunction');

describe('scale to decimal', function() {
  it('should return a scale with decimals', function() {
    scaleToNumber([new Decimal('32'), new Decimal('33.8')])
      .should.eql([32, 33.8]);
  });
});
