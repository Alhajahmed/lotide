const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const middle = function (array) {
  let middleElements = [];
  let middleIndex = Math.floor(array.length / 2);

  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 === 0) {
    middleElements.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    middleElements.push(array[middleIndex]);
  }

  return middleElements;
};

const actual = middle([1]);
const expected = [];
assertArraysEqual(actual, expected);

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
