function validatePIN(pin) {
    const regex = /^\d{6}$/;
    return regex.test(pin);
}

console.log(validatePIN("400088")); // true
console.log(validatePIN("40008"));  // false (only 5 digits)
console.log(validatePIN("4000887")); // false (7 digits)
console.log(validatePIN("40a088"));  // false (non-digit character)
