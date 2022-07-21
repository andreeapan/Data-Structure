const {performance} = require('perf_hooks');

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  console.log('total', total);
  return total;
}

//how it can be written
// function addUpTo(n){
//   console.log("total", n * (n+1)/2);
//   return n * (n+1)/2;
// }

let t1 = performance.now();
addUpTo(1000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)