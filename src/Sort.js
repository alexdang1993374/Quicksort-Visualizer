class Sort {
  constructor() {}
  swap(array, indexA, indexB) {
    let cache = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = cache;
  }

  cut(array, left, right, history) {
    let pivotPoint = array[Math.floor((left + right) / 2)];
    let leftIndex = left;
    let rightIndex = right;

    while (leftIndex <= rightIndex) {
      while (array[leftIndex] < pivotPoint) {
        leftIndex++;
      }
      while (array[rightIndex] > pivotPoint) {
        rightIndex--;
      }
      if (leftIndex <= rightIndex) {
        this.swap(array, leftIndex, rightIndex);
        if (!JSON.stringify(history).includes(JSON.stringify([...array]))) {
          history.push([...array]);
        }
        leftIndex++;
        rightIndex--;
      }
    }
    return leftIndex;
  }

  quickSort(array, left, right, history) {
    let midpoint;
    if (array.length > 1) {
      midpoint = this.cut(array, left, right, history);
      if (left < midpoint - 1) {
        this.quickSort(array, left, midpoint - 1, history);
      }
      if (midpoint < right) {
        this.quickSort(array, midpoint, right, history);
      }
    }
    return history;
  }
}

// let _ = new Sort();
// let arrayToSort = ["apple", "coconut", "banana", "elephant", "dog"];
// _.quickSort(arrayToSort, 0, arrayToSort.length - 1);
// console.log(arrayToSort);

module.exports = Sort;
