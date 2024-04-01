const isPrime = num => {
  if(num <= 1) return false
  if(num === 2 || num === 3) return true
  if(num % 2 === 0 || num % 3 === 0) return false

  for(let i = 5; i < Math.sqrt(num); i += 2) {
    if(num % i === 0) return false
  }
  return true
}

const res = [
  isPrime(2),
  isPrime(5),
  isPrime(8),
  isPrime(9),
  isPrime(7)
].join('\n')

console.log(res)
