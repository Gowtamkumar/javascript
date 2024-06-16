// ai algorithom akta akta kore upore niya ase
const arr = [3, 5, 4, 58, 9, 2, 22];
function bubbleSort(arr, len) {
  let temp, i, j;
  for (i = 0; i < len; i++) {
    for (j = i + 1; j < len - i - 1; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const result = bubbleSort(arr, arr.length);
console.log("🚀 ~ result:", result);
