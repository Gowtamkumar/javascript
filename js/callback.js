function calculation(value, callbackFun) {
  const sumv = 10 + value;
  return callbackFun(sumv);
}

function plusHandradeFun(value) {
  return 100 + value;
}

const res = calculation(100, plusHandradeFun);

console.log("Calculation", res);
