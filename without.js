function without(originalArray, itemsToRemove) {
  return originalArray.filter(function (item) {
    return !itemsToRemove.includes(item);
  });
}

const words = ["hello", "world", "lighthouse"];
const wordsCopy = [...words];
without(wordsCopy, ["lighthouse"]);
