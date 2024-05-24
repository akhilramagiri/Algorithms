//search algorithms
//Linear Search
function linerSearch(array, number) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
      console.log(i);
    }
  }
  return -1;
}

console.log(linerSearch([-5, 2, 10, 4, 6], 6));

//Big(O) = O(n)

//Binary Search
function binarySearch(given, number) {
  const array = [...given.sort()];

  const midNumber = Math.round(array.length / 2);
  if (array[midNumber] === number) {
    return midNumber;
  } else if (array[midNumber] < number) {
    for (i = midNumber; i < array.length; i++) {
      if (array[i] === number) {
        return i;
      }
    }
  } else {
    for (i = 0; i < midNumber; i++) {
      if (array[i] === number) {
        return i;
      }
    }
  }
  return -1;
}

function binary(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (array[middleIndex] === target) {
      return middleIndex;
    } else if (array[middleIndex] > target) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5], 5));

console.log(binary([0, 1, 2, 3, 4, 5], 5));

// Big(O) = O(logn)
