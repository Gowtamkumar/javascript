const arr = [-3, 4, 5, 6, 7, 8, 11, -9];

function bubbleSort(arr, len) {
  let temp;

  for (let parent = 0; parent < len; parent++) {
    for (let child = 0; child < len - parent - 1; child++) {
      if (arr[child] > arr[child + 1]) {
        temp = arr[child];
        arr[child] = arr[child + 1];
        arr[child + 1] = temp;
      }
    }
  }
  return arr;
}

const bbsort = bubbleSort(arr, arr.length);

function reverseSort(arr, len) {
  let parent, child, temp;
  for (parent = 0; parent < len; parent++) {
    for (child = 0; child < len - parent - 1; child++) {
      if (arr[child] < arr[child + 1]) {
        temp = arr[child];
        arr[child] = arr[child + 1];
        arr[child + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(reverseSort(arr, arr.length));
