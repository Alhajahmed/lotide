const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
function countLetters(sentence) {
  let letterCount = {};
  for (let char of sentence) {
    if (/[a-zA-Z]/.test(char)) {
      char = char.toLowerCase();
      if (letterCount[char]) {
        letterCount[char]++;
      } else {
        letterCount[char] = 1;
      }
    }
  }
  return letterCount;
}
countLetters("lighthouse in the house");
