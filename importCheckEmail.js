const { checkEmail } = require("./exportCheckEmail");

console.log(checkEmail("apranata@binar.co.id")); // Output ==> VALID
console.log(checkEmail("apranata@binar.com")); // Output ==> VALID
console.log(checkEmail("apranata@binar")); // Output ==> INVALID
console.log(checkEmail("apranata")); // Output ==> INVALID, 
// Error: as an argument would result in the function returning "INVALID" 
// Because "apranata" is not a valid email address
console.log(checkEmail(checkEmail(3322))); // // Output ==> INVALID, 
//Error: as the input is not a string and does not match the expected email format
console.log(checkEmail()); // Error: Email parameter is required and must be a string, 
// empty string for the email parameter
