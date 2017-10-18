const populateRandomArray = (min, max, arrayLength) => {
  let randomArray = [];
  for (let i = 0 ; i < arrayLength; i++){
    let random = Math.floor(Math.random() * (min-max) + min);
    randomArray.push(random);
  } 
  return randomArray;
}
