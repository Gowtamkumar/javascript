function countDown(num) {
  if (num == 100) {
    console.log("All done");
    return;
  }

  if (num % 2 == 0) {
    console.log("this is Odd",num);
  }else{
    console.log("this is Even number", num);
  }
  num++;
  countDown(num);
}

// countDown(5);

function factorial(num){
  if(num===1) return 1;
  console.log(num * factorial(num-1));
  return num * factorial(num-1)
}
const result = factorial(5)
console.log("🚀 ~ result:", result)

