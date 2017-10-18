const assert = require('chai').assert;
const expect = require('chai').expect;
const populateRandomArray = require('../lib/randomArray.js').populateRandomArray;
const sortCheck = require('../lib/randomArray.js').sortCheck;
const bubbleSort = require('../lib/bubble.js');

describe('bubbleSort', () => {
  
    it('should be a function', () => {
      assert.isFunction(bubbleSort);
    });
  
    it('should sort an array of 10 indices with numerical data types', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(bubbleSort(tenOne)),true);
    });
  
    it('should sort an array of 100 indices with numerical data types', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(bubbleSort(tenTwo)),true);
    });
   
    it('should sort an array of 1000 indices with numerical data types', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(bubbleSort(tenThree)),true);
    }); 
  
    it('should sort an array of 10000 indices with numerical data types', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(bubbleSort(tenFour)),true);
    });
  
    it('should sort an array of negative numbers', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(bubbleSort(negativeArray)),true);
    });
  
    it('should sort an array of letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(bubbleSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });