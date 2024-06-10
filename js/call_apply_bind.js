// call
// apply
// bind

// note: call apply, bind muloto this valu ke korar jonno bola hoy
// call and apply use kora mane function ke instand call kore diya
// bind holo argument ke bind kora rakha pore call kore jonno. jate any time call korte pari

function myFun(a, b) {
  console.log(this);
  console.log(this.x + this.y + a + b);
}

myFun.call({ x: 50, y: 30 }, 4, 60); //object muloto this kore dai but argument function a pathai dai.
myFun.apply({ x: 50, y: 30 }, [30, 50]); // apply akoy vabe object ke this hisabe parhai argument array hisabe patha te hoy
const newRes = myFun.bind({ x: 100, y: 200 }); // bind muloto bind kora rakha jane pore call kore jai
newRes(10, 40);
