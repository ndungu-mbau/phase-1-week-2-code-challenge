const generateArray = (num1, num2) => {
  if(num2 < num1) return 'num1 should be less than num2'
  let arr = []
  for(let i = num1; i <= num2; i++) {
    arr.push(i)
  }
  return arr
}

console.log(generateArray(4, 15))
console.log(generateArray(-7, 5))
