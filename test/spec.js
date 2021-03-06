/*jshint node:true, mocha:true */

'use strict';

require('should');

var Decimal = require('core-arbitrary-precision')(require('floating-adapter'));
var scaleToNumber = require('../src/');

describe('scale to number', function() {
  it('should return a scale with numbers', function() {
    scaleToNumber([new Decimal('32'), new Decimal('33.8')])
      .should.eql([32, 33.8]);
  });
});
