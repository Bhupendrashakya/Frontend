const validatePin = pin => /^\d{3}\s?\d{3}$/.test(pin);

// Test cases:
console.log(validatePin("400088"));    // true (valid without space)
console.log(validatePin("400 088"));   // true (valid with space)
console.log(validatePin("4000 88"));   // false (invalid, not exactly 6 digits)
console.log(validatePin("400088B"));   // false (invalid, contains a letter)
console.log(validatePin("12345 6"));   // false (invalid, not exactly 6 digits)
console.log(validatePin("400088 "));   // false (invalid, space at the end)
