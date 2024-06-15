
// selection sort akta akta kore compaire kore as like below code
const arr = [3, 5, 4, 58, 9, 3, 2, 22];

function selectionSort(arr, len) {
  let temp, index_min, i, j;
  for (i = 0; i < len - 1; i++) {
    index_min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[index_min]) {
        index_min = j;
      }
    }
    if (index_min != i) {
      temp = arr[i];
      arr[i] = arr[index_min];
      arr[index_min] = temp;
    }
  }
  return arr;
}

const result = selectionSort(arr, arr.length);
console.log("🚀 ~ result:", result);
