"use strict";
// Higher order function example: map, filter, and reduce.
function hello() {
  return function () {
    console.log("Hello World");
  };
}

hello()();

const radius = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const diameter = function (redius) {
  return 2 * redius;
};

const calculate = function (radius, logic) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
