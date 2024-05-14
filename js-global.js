let url = 'https://newsletter.getdx.com/p/software-developers-learning?ref=dailydev'

let encoded = encodeURI(url)
let decoded = decodeURI(encoded)
// console.log("🚀 ~ decoded:", decoded)


let encodedComponent = encodeURIComponent(url)
let decodeComponent = decodeURIComponent(encodedComponent)
// console.log("🚀 ~ decodeComponent:", decodeComponent)

// Eval
let x = 10;
let y = 30;
let text = "x * y";
// console.log(eval(text));


// Infinity

let xI = 1.797693134862315E+308;
let yX = x * 1.001;
// console.log("🚀 ~ yI:", typeof yX)

// isFinite
const isfinite = isFinite(123)
// console.log(isfinite);

// isNaN
// console.log(isNaN(333));

// Number
// console.log(Number(false));

// parseFloat
console.log(parseFloat(10.550));

// parseInt
console.log(parseInt("40"));
