function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

var fStart = performance.now();
addUpTo(1000000000);

var fEnd = performance.now();

console.log(`Time Elapsed: ${(fEnd - fStart) / 1000}`);
