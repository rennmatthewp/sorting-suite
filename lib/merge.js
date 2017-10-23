const mergeSort = (array) => {
  
  if (array.length < 2) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle); 
  let right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  
  let result = [];

  while (left.length && right.length) {

    if (left[0] < right[0]) {
      result.push(left.shift());
    
    } else {
      result.push(right.shift());
    }
  }
  result.push(...left, ...right);
  return result;
}

module.exports = mergeSort;