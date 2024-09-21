function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== "number") {
    throw new Error("Invalid Input");
  }
}

function fetchData(callback) {
  setTimeout(() => {
    callback("testing callback");
  }, 1000);
}

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("testing for promise"), 1000);
  });
}








module.exports = { myFunction, sum, fetchData, fetchPromise };
