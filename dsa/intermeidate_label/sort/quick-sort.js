// divide and conquer

function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let pi;

  pi = partition(arr, low, high);

  quickSort(arr, low, pi - 1);
  quickSort(arr, pi + 1, high);
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  let temp;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}
let arr = [2, 5, 6, 3, 28, 4, 55, 66, 11];
let n = arr.length;

quickSort(arr, 0, n - 1);

console.log(arr);
