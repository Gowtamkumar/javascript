// insertion sort use korte hole basi vag sort obostai thake
// jegula unsort thake segula while loop ar modome jaiga change kore then sort kore

const arr = [1, 2, 3, 4, 5, 68, 10];

function insertionSort(arr, len) {
  let i, j, temp;
  for (i = 1; i < len; i++) {
    temp = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const result = insertionSort(arr, arr.length);
console.log("🚀 ~ result:", result);
