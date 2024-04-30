const newmap = new Map([
  ["a", 2],
  ["b", 2],
]);

newmap.set('c', 4)

for(const [key, value] of newmap){
  console.log(`${key} -- ${value}`);
}