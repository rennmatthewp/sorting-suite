//define mergeSort function
const mergeSort = (array) => {
  //establish base case to return argument array if its length is one index
  if (array.length < 2) {
    return array;
  }
  //bring the argument array closer to the base case by..

  //establish middle index of argument array
  let middle = Math.floor(array.length / 2);

  //slice array from the head into to the middle index
  let left = array.slice(0, middle);

  //slice array from middle index to final index
  let right = array.slice(middle, array.length);

  //return the sorted array using the helper function merge,
  //passing in the left and right arrays into the recursively called mergeSort function
  return merge(mergeSort(left), mergeSort(right));
}

//define merge function setting up parameters to pass in the left and right arrays 
const merge = (left, right) => {
  //establish an empty array as a results array
  let result = [];

  //while there is indices in the left and right arrays
  while (left.length && right.length) {

    //if the head index of the left array is less than the head index of the right array, shift the head index off the left array and push it into the result array
    if (left[0] < right[0]) {
      result.push(left.shift());

    // if the head index of the right array is less than or equal to the head index left array, shift he head index off he right array and push it into the results array
    } else {
      result.push(right.shift());
    }
  }

  //push whatever remains in the left and then the right arrays into the result array
  result.push(...left, ...right);

  //return the sorted result array
  return result;
}

module.exports = mergeSort;