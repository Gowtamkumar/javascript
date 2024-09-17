function sum(a, b) {
  return a + b;
}

function myFunction(input) {
  if (typeof input !== 'number') {
    throw new Error("Invalid Input");
  }
}

module.exports = { myFunction, sum };
