const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const isPrime = num => {
  if(num <= 1) return false
  if(num === 2 || num === 3) return true
  if(num % 2 === 0 || num % 3 === 0) return false

  for(let i = 5; i < Math.sqrt(num); i += 2) {
    if(num % i === 0) return false
  }
  return true
}

const arePrime = arr => {
  return arr.filter(isPrime)
}

readline.question('Enter a range of numbers, separating each with a comma (,): ', (nums) => {
  console.log(arePrime(nums.split(',').map(Number)))
  readline.close()
})
