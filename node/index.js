const crypto = require("crypto");
const queryString = require("querystring");

// const mykey = crypto.createCipher("aes-128-cbc", "password");
// let mystr = mykey.update("abc", "utf8", "hex");
// mystr += mykey.final("hex");
// console.log(mystr);

const paresed = queryString.parse("name=Node.js&age=10");

console.log("🚀 ~ paresed:", paresed.parse(paresed));
