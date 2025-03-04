const validateEmail = email => /^abc(\.[a-zA-Z0-9_\+\-\.\']+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/.test(email);

// Valid test cases:
console.log(validateEmail("abc@bridgelabz.co"));           
console.log(validateEmail("abc.xyz@bridgelabz.co"));       
console.log(validateEmail("abc_123@bridgelabz.co"));      
console.log(validateEmail("abc+xyz@bridgelabz.co"));       
console.log(validateEmail("abc-xyz@bridgelabz.co"));      
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));   
console.log(validateEmail("abc_123+xyz@bridgelabz.co.us"));
console.log(validateEmail("abc@bridgelabz.co.uk"));        

// Invalid test cases:
console.log(validateEmail("abc@bridgelabz.com"));         
console.log(validateEmail("abc.xyz@bridge.co"));          
console.log(validateEmail("abcd@bridgelabz.co"));         
console.log(validateEmail("abc.xyz@bridgelabz"));         
console.log(validateEmail("abc@bridgelabz"));             
console.log(validateEmail("abc.#xyz@bridgelabz.co"));      
console.log(validateEmail("abc.xyz@bridgelabz.co.in!")); 
console.log(validateEmail("abc@bridgelabz.co.abc"));      
console.log(validateEmail("abc@bridgelabz.co.i"));        
