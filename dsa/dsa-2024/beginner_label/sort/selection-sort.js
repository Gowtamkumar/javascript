const arr = [4, 5, 6, 7, 8, 11];

function selectionSort(arr, len) {
  let i = 0;
  let j = 0;
  let index_min;
  let temp;

  for (i = 0; i < len - 1; i++) {
    index_min = i;
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[index_min]) {
        index_min = j;
      }
    }

    if (index_min != i) {
      temp = arr[j];
      arr[i] = arr[index_min];
      arr[index_min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr, arr.length));
