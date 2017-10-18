const assert = require('chai').assert;
const expect = require('chai').expect;
const populateRandomArray = require('../lib/randomArray.js').populateRandomArray;
const sortCheck = require('../lib/randomArray.js').sortCheck;
const insertionSort = require('../lib/insertion.js');

describe('insertionSort', () => {
  
    it('should be a function', () => {
      assert.isFunction(insertionSort);
    });
  
    it('should sort an array with 10 items', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(insertionSort(tenOne)),true);
    });
  
    it('should sort an array with 100 items', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(insertionSort(tenTwo)),true);
    });
   
    it('should sort an array with 1000 items', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(insertionSort(tenThree)),true);
    }); 
  
    it('should sort an array with 10000 items', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(insertionSort(tenFour)),true);
    });
  
    it('should sort an array with negative numbers', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(insertionSort(negativeArray)),true);
    });
  
    it('should sort an array with letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(insertionSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });