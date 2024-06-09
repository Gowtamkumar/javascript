// callback,promises and async-await

// 1.synchronous blocking behavior

// 2.asynchronous non blocking behavior

// ## promise
// create promise and promise chain
const hasMetting = true;
const metting = new Promise((resolve, reject) => {
  if (!hasMetting) {
    const mettingDetails = {
      name: "gowtamkumar",
      location: "google meet",
      time: "10:00 pm",
    };
    resolve(mettingDetails);
  } else {
    reject(new Error("meeting already assign"));
  }
});

const addToCalendar = (mettingDetails) => {
  const calendar = `${mettingDetails.name} has been scheduled ofn ${mettingDetails.location} at ${mettingDetails.time}`;
  return Promise.resolve(calendar);
};
// metting
//   .then(addToCalendar)
//   .then((value) => {
//     console.log("value", value);
//   })
//   .catch((err) => {
//     console.log("error", err.message);
//   });

// if we can call 2 promise same time we can below code

const promise1 = Promise.resolve(`Promise 1 resolved`);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2]).then((res) => {
  console.log("promise all", res);
});

// ## async, await this use recommonded below up code convert to async and await
async function testFun() {
  try {
    const meetingDetails = await metting;
    const calDend = await addToCalendar(meetingDetails);
    console.log("calDend", calDend);
  } catch (error) {
    console.log("something wrong!");
  }
}

testFun();

console.log("hello");
