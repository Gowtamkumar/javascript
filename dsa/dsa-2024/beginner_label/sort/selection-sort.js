const arr = [4, 50, 6, 17, 8, 11];

function selectionSort(arr) {
  let i = 0;
  let j = 0;
  let max_index;
  let temp_data;
  for (i = 0; i < arr.length - 1; i++) {
    max_index = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[max_index] > arr[j]) {
        max_index = j;
      }
    }

    if (max_index != j) {
      temp_data = arr[max_index];
      arr[max_index] = arr[i];
      arr[i] = temp_data;
    }
  }

  return arr;
}

const result = selectionSort(arr);
console.log("🚀 ~ result:", result);
