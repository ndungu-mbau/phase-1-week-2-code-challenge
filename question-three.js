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

const arr = [2, 3, 5, 7, 9, 10, 11, 19, 15, 17]
const res = arePrime(arr)

console.log(res)
