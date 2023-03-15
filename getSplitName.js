function getSplitName(personName){
  if (typeof personName !== "string") {
    return "Error: Input must be a string";
  }
  const givenNumber = personName.split(" ");
  if (
    givenNumber.length !== 1 &&
    givenNumber.length !== 2 &&
    givenNumber.length !== 3
  ) {
    return "Error: This function is only for max 3 characters name";
  }
  const [firstName, middleName, lastName] = givenNumber;
  return {
    // return an object
    firstName,
    middleName: middleName || null,
    lastName: lastName || null,
  };
}

// When the function is called
console.log(getSplitName("Aldi Daniela Pranata"))
// Output => {firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata}

console.log(getSplitName("Dwi Kuncoro"))
// Output => {firstName: 'Dwi', middleName: null, lastName: 'Kuncoro}

console.log(getSplitName("Aurora"))
// Output => {firstName: 'Aurora', middleName: null, lastName: null}

console.log(getSplitName("Aurora Aurelita Sukma Darma"))
// Output => Error: This function is only for 3 characters name

console.log(getSplitName(0))
// Output => Error: Input is not a string