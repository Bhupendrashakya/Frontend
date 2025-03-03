// Conversion constants
const inchesPerFoot = 12;
const feetPerMeter = 0.3048;
const metersPerAcre = 4046.86;

//  Converting inches to feet
let inches = 42;
let feet = inches / inchesPerFoot;
console.log(`${inches} inches is equal to ${feet} feet.`);

// Converting rectangular plot dimensions from feet to meters
let lengthFeet = 60;
let widthFeet = 40;

let lengthMeters = lengthFeet * feetPerMeter;
let widthMeters = widthFeet * feetPerMeter;

console.log(`The rectangular plot of ${lengthFeet} feet x ${widthFeet} feet is equal to ${lengthMeters.toFixed(2)} meters x ${widthMeters.toFixed(2)} meters.`);

// Calculating area of 25 plots in acres
let areaOnePlotM2 = lengthMeters * widthMeters;
let totalAreaM2 = areaOnePlotM2 * 25;
let areaInAcres = totalAreaM2 / metersPerAcre;

console.log(`The area of 25 such plots is ${areaInAcres.toFixed(2)} acres.`);
