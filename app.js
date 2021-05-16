const passwordEl = document.getElementById('password')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const uppercaseTotal = 'ABCDEFGHIJKLMnOPQRSTWVXYZ'
const lowercaseTotal = 'abcdefghijklmnopqrstwvxyz'
const numberTotal = '1234567890'
const symbolTotal = '!@#$%^&*'

let currPass = ''

generateEl.addEventListener('click', () => {
  let password = ''
  for (i = 0; i <= lengthEl.value - 1; i++) {
    if (uppercaseEl.checked) {
      password += upperCase()
    }
    if (lowercaseEl.checked) {
      password += lowerCase()
    }
    if (numberEl.checked) {
      password += numberCase()
    }
    if (symbolEl.checked) {
      password += symbolCase()
    }
  }

  for (i = 0; i <= lengthEl.value - 1; i++) {
    currPass += passwordCase(password)
  }

  passwordEl.value = currPass
  if (currPass.startsWith('undefined')) {
    let undefinedValue = ''
    for (i = 0; i <= lengthEl.value - 1; i++) {
      undefinedValue +=
        lowercaseTotal[Math.floor(Math.random() * lowercaseTotal.length)]
    }
    passwordEl.value = undefinedValue
  }
  currPass = ''
})

function upperCase() {
  return uppercaseTotal[Math.floor(Math.random() * uppercaseTotal.length)]
}
function lowerCase() {
  return lowercaseTotal[Math.floor(Math.random() * lowercaseTotal.length)]
}
function numberCase() {
  return numberTotal[Math.floor(Math.random() * numberTotal.length)]
}
function symbolCase() {
  return symbolTotal[Math.floor(Math.random() * symbolTotal.length)]
}

function passwordCase(password) {
  return password[Math.floor(Math.random() * password.length)]
}

clipboardEl.addEventListener('click', () => {
  passwordEl.select()
  document.execCommand('copy')
})
