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

module.exports = middle;
