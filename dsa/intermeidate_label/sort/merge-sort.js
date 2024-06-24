// every array Element 2 vage vag kore dite hobe then marge korte hobe
const arr = [2, -1, 4, 50, 100, 40, 5, 9, 35, 69, 90, 19, 20, 11, 21, 99];

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  const left = mergeSort(leftArr);
  const right = mergeSort(rightArr);
  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];
  leftIndex = 0;
  rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      sortedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

const result = mergeSort(arr);
// console.log("🚀 ~ result:", result);
