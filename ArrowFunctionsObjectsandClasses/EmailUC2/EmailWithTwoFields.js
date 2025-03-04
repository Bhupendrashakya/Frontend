const validateEmail = email => /^abc(\.[a-z]+)?@bridgelabz\.co(\.[a-z]+)?$/.test(email);

// Test cases:
console.log(validateEmail("abc@bridgelabz.co"));        // true (valid, no optional part after abc)
console.log(validateEmail("abc.xyz@bridgelabz.co"));    // true (valid, with optional part after abc)
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // true (valid, with both optional parts)
console.log(validateEmail("abc@bridgelabz.com"));       // false (invalid, wrong domain)
console.log(validateEmail("abc.xyz@bridge.co"));        // false (invalid, wrong domain)
console.log(validateEmail("abcd@bridgelabz.co"));       // false (invalid, doesn't start with abc)
console.log(validateEmail("abc.xyz@bridgelabz"));       // false (invalid, missing top-level domain)
console.log(validateEmail("abc@bridgelabz.co.in"));     // true (valid, domain with second-level domain)
