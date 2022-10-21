let x;
let celsius;
let fahrenheit;

const ftoc = function(f) {
  celcius = (f-32) * 0.5555556;
  return celcius;
};

const ctof = function(c) {
  fahrenheit = (c*1.8+32);
  return fahrenheit;
};

console.log(ftoc(32));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
