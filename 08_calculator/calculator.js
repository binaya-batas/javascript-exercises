

const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(x) {
  let total=0;
	for (let i=0; i<x.length; i++) {
    total += x[i];
  }

  return total;
};

const multiply = function(x) {
  let total=1;
	for (let i=0; i<x.length; i++) {
    total *= x[i];
  }

  return total;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	let result = 1;

  for( let i=1; i<=x; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
