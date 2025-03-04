function validatePin(pin) {
    // This regex ensures the PIN starts with a digit and doesn't start with an alphabet or special character
    const regex = /^[0-9]/;

    // Testing the provided pin against the regex
    if (regex.test(pin)) {
        console.log("PIN is valid");
        return true;
    } else {
        console.log("PIN is invalid. It should not start with an alphabet or special character.");
        return false;
    }
}

// Testing the function
const pinCode = "A400088";  
validatePin(pinCode);
