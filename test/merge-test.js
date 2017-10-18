const assert = require('chai').assert;
const expect = require('chai').expect;
const populateRandomArray = require('../lib/randomArray.js').populateRandomArray;
const sortCheck = require('../lib/randomArray.js').sortCheck;
const mergeSort = require('../lib/merge.js');

describe('mergeSort', () => {
  
    it('should be a function', () => {
      assert.isFunction(mergeSort);
    });
  
    it('should sort an array with 10 indices with numerical data types', () => {
      let tenOne = populateRandomArray(0, 100, 10);
      assert.equal(sortCheck(mergeSort(tenOne)),true);
    });
  
    it('should sort an array with 100 indices with numerical data types', () => {
      let tenTwo = populateRandomArray(0, 1000, 100);
      assert.equal(sortCheck(mergeSort(tenTwo)),true);
    });
   
    it('should sort an array with 1000 indices with numerical data types', () => {
      let tenThree = populateRandomArray(0, 10000, 1000);
      assert.equal(sortCheck(mergeSort(tenThree)),true);
    }); 
  
    it('should sort an array with 10000 indices with numerical data types', () => {
      let tenFour = populateRandomArray(0, 100000, 10000);
      assert.equal(sortCheck(mergeSort(tenFour)),true);
    });
  
    it('should sort an array with 100000 indices with numerical data types', () => {
      let tenFive = populateRandomArray(0, 1000000, 100000);
      assert.equal(sortCheck(mergeSort(tenFive)),true);
    });

    it('should sort an array with negative numerical data types', () => {
      let negativeArray = populateRandomArray(-100, 1000, 100);
      assert.equal(sortCheck(mergeSort(negativeArray)),true);
    });
  
    it('should sort an array with letters', () => {
      let lettersArray = ['g', 'n', 'b', 'e', 'r', 'y', 'z', 't', 'a', 'm'];
      assert.deepEqual(mergeSort(lettersArray), ['a', 'b', 'e', 'g', 'm', 'n', 'r', 't', 'y', 'z'])
    });
  });