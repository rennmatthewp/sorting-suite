const assert = require('chai').assert;
const expect = require('chai').expect;
const populateRandomArray = require('../lib/randomArray.js').populateRandomArray;
const sortCheck = require('../lib/randomArray.js').sortCheck;
const quickSort = require('../lib/merge.js');

describe('quickSort', () => {
  
    it('should be a function', () => {
      assert.isFunction(quickSort);
    });
  
    it('should sort an array of 10 indices with numerical data types', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(quickSort(tenOne)),true);
    });
  
    it('should sort an array of 100 indices with numerical data types', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(quickSort(tenTwo)),true);
    });
   
    it('should sort an array of 1000 indices with numerical data types', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(quickSort(tenThree)),true);
    }); 
  
    it('should sort an array of 10000 indices with numerical data types', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(quickSort(tenFour)),true);
    });
  
    it('should sort an array of 100000 indices with numerical data types', () => {
      let tenFive = populateRandomArray(0, 1000000, 100000);
      assert.equal(sortCheck(quickSort(tenFive)),true);
    });
  
    it('should sort an array of 1,000,000 indices with numerical data types', () => {
      let tenFive = populateRandomArray(0, 1000000, 400000);
      assert.equal(sortCheck(quickSort(tenFive)),true);
    });

    it('should sort an array of negative numerical data types', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(quickSort(negativeArray)),true);
    });
  
    it('should sort an array of letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(quickSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });