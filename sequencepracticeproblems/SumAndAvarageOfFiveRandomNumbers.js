// Generate 5 random 2-digit numbers
let randomNumbers = [];
let sum = 0;

for (let i = 0; i < 5; i++) {
    let randomValue = Math.floor(Math.random() * 90) + 10; // getting Random number between 10 and 99
    randomNumbers.push(randomValue);
    sum += randomValue;
}

// Calculating the average
let average = sum / randomNumbers.length;

// displaying  the results
console.log("Random 2-digit numbers: ", randomNumbers);
console.log("Sum: ", sum);
console.log("Average: ", average.toFixed(2)); 