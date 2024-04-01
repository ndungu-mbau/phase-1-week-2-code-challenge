const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const generateArray = (num1, num2) => {
  if(num2 < num1) return 'num1 should be less than num2'
  let arr = []
  for(let i = num1; i <= num2; i++) {
    arr.push(i)
  }
  return arr
}

readline.question('Enter a number: ', (num) => {
  readline.question('Enter another number: ', (num2) => {
    console.log(generateArray(parseInt(num), parseInt(num2)));
    readline.close()
  })
})
