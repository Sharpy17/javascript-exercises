const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = 0;
	for (let i = 0; i < arr.length; i++) {
  total += arr[i];
  };
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i]
  }
  return total;
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
    answer = answer * i;
  } return answer;
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
