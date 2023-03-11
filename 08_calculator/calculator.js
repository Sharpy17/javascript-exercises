const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(total, numbers) {
	for (let i = 0; i > 0; i++)
  numbers += total

  // Think about this one
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
let answer = 1;
if (a === 0 || a === 1) {
  return answer;
} else if (a > 1) {
  for (let i = a; i >= 1; i--){
    answer = answer * i
  }
  } else {
    return "The number has to be positive";
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
