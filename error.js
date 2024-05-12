let num = 2;
try {
  num.toPrecision(101);
} catch (error) {
  console.log(error.name); //this is ranceError
}

let x = 4;
try {
  x = y + 1;
} catch (error) {
  console.log(error.name); // this is Reference Error
}

try {
  eval("'hello'");
} catch (error) {
  console.log(error.name); //SyntaxError
}

let number = 3;
try {
  num.toUpperCase();
} catch (error) {
  console.log(error.name); //this TypeError
}

try {
  const url =
    "https://docs.google.com/spreadsheets/d/1wM4eYgN8mmPRwCQxuhIx2qxXaP4-QT4L/edit#gid=1836271778";
  const decode = encodeURI(url);
  console.log("🚀 ~ decode:", decodeURI(decode));
} catch (error) {
  console.log(error);
}

try {
  Adddlert("error message");
} catch (error) {
  console.log(error.message);
}
