function promiseFun(value) {
  return new Promise((resolve, reject) => {
    let x = 9;
    if (x === value) {
      resolve("It,ok");
    } else {
      reject("Error");
    }
  });
}

promiseFun(20)
  .then((result) => {
    console.log("result", result);
  })
  .catch((error) => {
    console.log("error", error);
  });
