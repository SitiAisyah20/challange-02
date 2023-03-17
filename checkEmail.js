const { checkTypeNumber } = require("./checkTypeNumber");
function checkEmail(email) {
  // regex pattern for email validation
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email || typeof email !== "string" || email === undefined) {
    return "Error: Email parameter is required and must be a string";
  }
  return regex.test(email) ? "VALID" : "INVALID";
}

console.log(checkEmail("apranata@binar.co.id")); // Output ==> VALID
console.log(checkEmail("apranata@binar.com")); // Output ==> VALID
console.log(checkEmail("apranata@binar")); // Output ==> INVALID
console.log(checkEmail("apranata")); // Output ==> INVALID, 
// Error: as an argument would result in the function returning "INVALID" 
// Because "apranata" is not a valid email address
console.log(checkTypeNumber(checkEmail(3322))); // // Output ==> INVALID data type, 
//Error: as the input is not a string and does not match the expected email format
console.log(checkEmail()); // Error: Email parameter is required and must be a string, 
// empty string for the email parameter
