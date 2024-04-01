const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

const checkAndChangeCaseChar = (char) => {
  if(char === ' ') return ' '
  if(char === char.toUpperCase()) {
    return char.toLowerCase()
  } else if (char === char.toLowerCase()) {
    return char.toUpperCase()
  }
}

const checkAndChangeCaseStr = (str) => {
  return str
    .split('')
    .map((char) => checkAndChangeCaseChar(char))
    .join('')
}

// console.log(checkAndChangeCaseStr('Hello World'))
readline.question('Enter a string: ', (str) => {
  console.log(checkAndChangeCaseStr(str))
  readline.close()  
})
