let result = "5" === 5; // this comparision
let result2 = null == undefined; // result: true
let res = "hello" && 0; // result 0
let res2 = "" && "default"; // resutl: ''
let res5 = 0 && ""; // result: 0
let result4 = "0" && 0; // result: 0(number)
let falsy = [] == false // result: true
let falsy1 = [0] == false // result: true
let falsy3 = {} == false // result: true
console.log("🚀 ~ falsy:", falsy3);
