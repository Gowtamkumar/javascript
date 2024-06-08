//  𝗧𝗵𝗿𝗼𝘁𝘁𝗹𝗶𝗻𝗴: This is a technique to control how many times a function can be executed over time.

function fetchData() {
  console.log("Fetching data...");
  setTimeout(() => {
    console.log("Data Fetched");
  }, Math.random * 1000);
}

function throttle(mainFun, delay) {
  let timerFlag = null;
  // returing a throttled version
  return (...args) => {
    if (timerFlag === null) {
      mainFun(...args);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
}

const callThrootle = throttle(fetchData, 5000);
// window.addEventListener("scroll", callThrootle);
console.log("🚀 ~ callThrootle:", callThrootle);
