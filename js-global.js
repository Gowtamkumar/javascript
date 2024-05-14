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
console.log(eval(text));