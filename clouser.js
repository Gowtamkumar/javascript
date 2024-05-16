function person() {
  let detailperson = "this a bad by he all tel a lie";
  function innerFun() {
    return detailperson;
  }

  return innerFun;
}

const result = person();
console.dir("🚀 ~ result:", result());
