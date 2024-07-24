
function addUpTo(v) {
  let total = 0;
  for (let i = 1; i <= v; i++) {
    total += i;
  }
  return total;
}

var tStart = performance.now();

addUpTo(1000000000);
var tEnd = performance.now();
console.log(`Time Elapsed: ${(tEnd - tStart) / 1000} seconds.`);
