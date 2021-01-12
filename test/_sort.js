const Sort = require("../src/Sort");
const { expect } = require("chai");
// const SomeKindOfSort = require("../src/Sort");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should sort an array", () => {
    const arr = new Sort();
    let arrayToSort = [10, 80, 30, 90, 40, 50, 70];
    arr.quickSort(arrayToSort, 0, arrayToSort.length - 1);
    expect(arrayToSort).to.eql([10, 30, 40, 50, 70, 80, 90]);
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.quickSort).to.be.a("function");
  });
});
