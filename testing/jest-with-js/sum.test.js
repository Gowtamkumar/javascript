const sum = require("./sum");

test("adds 1 +2 sum is 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// this testing without fun
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// object testing

test("object assigment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});


// boolean testing

test("null is falsy", ()=> {
  const n = 0 // 0/ false;
  expect(n).toBeFalsy()
})

test("null is truthy", ()=> {
  const n = 1 //1, true;
  expect(n).toBeTruthy()
})