const newset = new Set([
  ["a", 2],
  ["b", 2],
]);

newset.set("c", 4);

for (const [key, value] of newset) {
  console.log(`${key} -- ${value}`);
}
