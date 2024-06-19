/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function (n) {
  var counter = n;
  return () => counter++;
};

console.time("createCounter");
const counter = createCounter(10);
console.timeEnd("createCounter");

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
