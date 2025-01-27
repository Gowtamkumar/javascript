"use strict";
let array = [2, 33, 44, 55, 10, 300, 500];
let findValue = 55;
for (let i = 0; i < array.length; i++) {
    if (array[i] === findValue) {
        console.log(i);
    }
}
