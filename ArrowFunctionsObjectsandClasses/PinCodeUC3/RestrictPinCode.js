const validatePin = pin => /^[0-9]+$/.test(pin);

// Test the function
const pinCode = "400088B";  // This should fail as it ends with a letter
console.log(validatePin(pinCode));  // false
