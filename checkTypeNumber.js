// Arrow Function
const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "undefined") {
    return "Error: Where is the parameter";
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return givenNumber + " adalah Bilangan Genap";
  } else {
    return givenNumber + " adalah Bilangan Ganjil";
  }
};

console.log(checkTypeNumber(10)); // Output => "Genap"
console.log(checkTypeNumber(3)); // Output => "Ganjil"
console.log(checkTypeNumber("3")); // Output => "Error: Invalid data type"
console.log(checkTypeNumber({})); // Output => "Error: Invalid data type"
console.log(checkTypeNumber([])); // Output => "Error: Invalid data type"
console.log(checkTypeNumber()); // Output => "Error: Where is the parameter"

module.exports = { checkTypeNumber };
