// this currying function
function parentFun(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = parentFun(10)(10)(10);
console.log("🚀 ~ result:", result)


// // Debouncing is a strategy used to improve the performance of a feature by controlling 
// // the time at which a function should be executed.

// function debouncing(fun, deyl){
//   let x = 
// }

// let result1  = debouncing()