const assert = require('chai').assert;
const expect = require('chai').expect;
const insertionSort = require('../lib/insertion.js');

describe('insertionSort', () => {

  it('should be a function', () => {
    assert.isFunction(insertionSort);
  });
  
});