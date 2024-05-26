const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin
});
process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdout.write("This important software is now closing\n");
