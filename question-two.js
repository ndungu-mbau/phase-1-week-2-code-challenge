/**
 * generateArray function takes two numbers, num1 and num2,
 * and returns an array of numbers between num1 and num2,
 * inclusive of num1 and num2. If num2 is less than num1,
 * the function returns a string indicating that num1 should
 * be less than num2.
 *
 * @param {number} num1 - first number in the range
 * @param {number} num2 - second number in the range
 * @returns {array} array of numbers between num1 and num2,
 * or a string indicating that num1 should be less than num2
 */
const generateArray = (num1, num2) => {
  // if num2 is less than num1, return a string indicating
  // that num1 should be less than num2
  if (num2 < num1) return "num1 should be less than num2";

  // declare an empty array to store the numbers between
  // num1 and num2, inclusive of num1 and num2
  let arr = [];

  // loop through all numbers between num1 and num2,
  // inclusive of num1 and num2, and push each number to
  // the array
  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  // return the array of numbers between num1 and num2,
  // inclusive of num1 and num2
  return arr;
};

// test the generateArray function with two valid inputs
console.log(generateArray(4, 15));

// test the generateArray function with two invalid inputs
console.log(generateArray(7, 5));
