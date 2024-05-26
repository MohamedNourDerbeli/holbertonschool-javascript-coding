const prompt = require('prompt-sync')({ sigint: true });

console.log("Welcome to Holberton School, what is your name?");
let name = prompt('Please enter your name: ');
console.log(`Your name is: ${name}`);

console.log("This important software is now closing");
