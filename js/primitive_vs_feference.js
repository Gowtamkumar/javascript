// learn with sumit

// Primitive Values
//  String
//  Number
//  Boolean
//  null
//  undefined
//  Symbol

//  note: primitive value stack moto thake and this is not nutable

// Reference Values /Object Values
// Object
// Array
// Function
// Date

// note: Reference value Heap ar moddha thake
// Heap is random memory use kore
// Reference value muloto pointer ke point kore jodi same data hoy tahole pointer alada but pointer data same
// assign and mutation: assign is person ={} and mutation is person.name = "new name" so assign korle new pointer hobe memorite new jaiga nibe
// and jodi mutaion kora hoy copy kore then main and compy var a value same change hoya jabe

const a = ["gowtam", "paul"];

const b = a;

a.push("poly");

console.log(a);
console.log(b);

// note : this up code result same becouse pointer alada but value same so we can about this problem below code

const c = ["gowtam", "paul"];

const d = [...c];
// jodi single array hoy tahole problem nai but nested array hole deep copy dorkar. we can use lodash libreriy

c.push("poly");

console.log(c);
console.log(d);

// pass by Reference / value

let e = 2;

function change(value) {
  value = 2; // ata assign hoyche
  value.name = "go"; // ata mutaion hoyche
}

change(e); // amara mone korte pari pass korlam value but na ata holo pass by referance 

console.log(e);


// note: primitive value kokhon mutate kora hoy na jodi o kori seat ignore kore
// note: referance value nutation kora jai and assing o kora jai. function a jonno all time pass by referance for any data type