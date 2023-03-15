function getAngkaTerbesarKedua(numbers){
  if (!Array.isArray(numbers)) {
    return "Error: Argument must be an array of numbers";
  }
  if (numbers.length < 2) {
    return "Error: Array must have at least two numbers";
  }
  const sortedNumbers = numbers.sort((a, b) => b - a);
  return sortedNumbers[1];
}

// When the function is called
const dataNumbers = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataNumbers))
// Output => 8 (9,8,7,7,4,4,3,2,2)

console.log(getAngkaTerbesarKedua(0))
// Output => Error: Argument must be an array of numbers

console.log(getAngkaTerbesarKedua())
// Output => Error: Argument must be an array of numbers