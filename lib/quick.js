//define quickSort function
const quickSort = (array) => {
  //establish base case to return the argument array if its length is one index
  if( array.length < 2 ) {
    return array
  };
  //establish a pivot to be the last index of the argument array
  let pivot = array.pop();
  //establish an empty array for indices with values less than the pivot
  let arrayLeft = []
  //establish an empty array for indices with values greater than the pivot
  let arrayRight = [];

  //iterate over the argument array
  for ( let i = 0; i < array.length; i++ ) {

      //if the value of the current index is less than the pivot, push it into the left array
      if( array[i] < pivot ) {
        arrayLeft.push(array[i]);

      //if the value of the current index is greater than or equal to the pivot, push it into the right array
      } else {
        arrayRight.push(array[i]);
      }
  }
  //return the final sorted array with recursively calling quickSort passing in the left array, the pivot, and recursively calling quickSort passing in the right array.
  return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)]
}

module.exports = quickSort;