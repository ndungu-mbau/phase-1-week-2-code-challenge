const isPrime = num => {
  if(isNaN(num)) return false
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

console.log(arePrime([2,3,4,5,6,7,8,9,15.17]))
