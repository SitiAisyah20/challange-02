function isValidPassword (givenPassword){
  // Check if password is a string & has at least 8 characters
  if (typeof givenPassword === "string" && givenPassword.length >= 8) {
    // Check if password contains at least one uppercase letter, one lowercase letter, and one digit
    if (
      /[A-Z]/.test(givenPassword) &&
      /[a-z]/.test(givenPassword) &&
      /\d/.test(givenPassword)
    ) {
      return true;
    }
  }
  return false;
}

// When the function is called
console.log(isValidPassword('Meong2021'))
// Output => true
// Because it meets the requirements, it consists of 8 letters, there are uppercase letters, there are lowercase letters and there are numbers

console.log(isValidPassword('meong2021'))
// Output => false because there is no uppercase letter

console.log(isValidPassword('@eong'))
// Output => false because the length is less than 8 (length:5)

console.log(isValidPassword('Meong2'))
// Output => false because the length is less than 8 (length:6)

console.log(isValidPassword(0))
// Output => false because the input is not a string

console.log(isValidPassword())
// Output => false because there is no input
