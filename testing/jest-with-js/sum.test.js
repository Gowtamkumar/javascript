const { sum, myFunction, fetchData, fetchPromise } = require("./sum");

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

test("null is falsy", () => {
  const n = 0; // 0/ false;
  expect(n).toBeFalsy();
});

test("null is truthy", () => {
  const n = 1; //1, true;
  expect(n).toBeTruthy();
});

// error throw
test("error throw", () => {
  expect(() => {
    myFunction("kkk");
  }).toThrow();
});

test("testing a callback fun", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("testing callback");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// promise fun resolve
test("testing for promise", () => {
  return expect(fetchPromise()).resolves.toBe("testing for promise");
});

// promise fun reject
test("testing for promise is error", () => {
  return expect(fetchPromise()).rejects.toThrow("error");
});
