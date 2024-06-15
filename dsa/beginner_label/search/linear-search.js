// linear search akta akta kore search kora

const newArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 900, 10, 33, 55, 66, 88, 11, 22, 33, 65, 565,
];
// time complicity o(n)
// space complicity o(1)

function lianerSearch(arr, searchValue) {
  let i = 0;
  let len = arr.length;
  for (; i < len; i++) {
    if (arr[i] === searchValue) {
      return `yes! this value is: ${arr[i]} and this value index: ${i}`;
    }
  }
  return `Not found ${searchValue} in this array`;
}

const result = lianerSearch(newArray, 565);
console.log("🚀 ~ result:", result);
