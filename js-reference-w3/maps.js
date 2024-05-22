// create map
const fruits = new Map([
  ["apples", 400],
  ["bananas", 500],
  ["orange", 600],
  ["orange", 600],
]);

console.log("fruits", fruits);
fruits.set("kola", 50);
console.log(fruits);
// fruits.clear()
// console.log(fruits);

fruits.delete("kola");
console.log(fruits);

let text = ""; // entries help to itarator
for (const x of fruits.entries()) {
  text += x + " ";
}

console.log(text);

let textforeach = " "; //forEach method invokes a function for each map Element
fruits.forEach(function (value, key) {
  textforeach += value + "=>" + key;
});

console.log(fruits);

// get the value from map
console.log(fruits.get('apples'));

// we can use groupBy for grouping
// has method is check in map
