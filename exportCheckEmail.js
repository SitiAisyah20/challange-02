function checkEmail(email) {
  // regex pattern for email validation
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email || typeof email !== "string" || email === undefined) {
    return "Error: Email parameter is required and must be a string";
  }
   return regex.test(email) ? "VALID" : "INVALID";
}

module.exports = { checkEmail };
