// binary all time sort obostai thake
// jodi sort kora na thake tahole binary search hobe na
// array ke all time divided kore nite hobe
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23, 50];

function binarySearch(arr, searchValue) {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;

  while (left <= right) {
    mid = Math.ceil((left + right) / 2);
    if (arr[mid] === searchValue) {
      return arr[mid];
    }

    if (arr[mid] < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const result = binarySearch(arr, 7);
console.log("🚀 ~ result:", result);
