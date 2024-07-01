const crypto = require("crypto");

const mykey = crypto.createCipher("aes-128-cbc", "password");
let mystr = mykey.update("abc", "utf8", "hex");
mystr += mykey.final("hex");
console.log(mystr);
