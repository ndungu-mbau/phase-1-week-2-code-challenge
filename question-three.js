/**
 * Takes a number and returns a boolean indicating whether the number is prime.
 * @param {number} num - The number to check for primality
 * @returns {boolean} Whether the number is prime
 */
const isPrime = (num) => {
  // If the number is not a number or is less than or equal to 1, return false
  if (isNaN(num) || num <= 1) return false;
  // If the number is 2 or 3, return true
  if (num === 2 || num === 3) return true;
  // If the number is evenly divisible by 2 or 3, return false
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Loop through the numbers from 5 up to the square root of the number
  for (let i = 5; i < Math.sqrt(num); i += 2) {
    // If the number is evenly divisible by any number in this range, return false
    if (num % i === 0) return false;
  }
  // If the number has not been found to be divisible by any number in the range, return true
  return true;
};

/**
 * Takes an array of numbers and returns a new array
 * containing only the prime numbers from the original array.
 * @param {number[]} arr - The array of numbers to filter
 * @returns {number[]} The filtered array of prime numbers
 */
const arePrime = (arr) => {
  // Use the isPrime function to filter the array of numbers
  return arr.filter(isPrime);
};

console.log(arePrime([2, 3, 4, 5, 6, 7, 8, 9, 15.17]));
