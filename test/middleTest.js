// const assertArraysEqual = require("../assertArraysEqual");
// const middle = require("../middle");

// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

const assert = require("chai").assert;
const middle = require("../middle");

describe("#middle", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual[(middle([1, 2, 3]), [2])];
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual[(middle(["5"]), ["5"])];
  });
});
