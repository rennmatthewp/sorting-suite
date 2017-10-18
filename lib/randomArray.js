const populateRandomArray = (min, max, arrayLength) => {
  let randomArray = [];
  for (let i = 0 ; i < arrayLength; i++) {
    let random = Math.floor(Math.random() * (min-max) + min);
    randomArray.push(random);
  };
  return randomArray;
};

const sortCheck = (sortedArray) => {
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] <= sortedArray[i + 1]) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = { populateRandomArray, sortCheck }