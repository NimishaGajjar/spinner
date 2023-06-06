// process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r| \n');
// }, 1500);

const symbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
let time = 100;

for (let counter = 0; counter < 3; counter++) {
  for (let i = 0; i < symbols.length; i++) {
    setTimeout(() => {
      process.stdout.write(symbols[i]);
    }, time);
    time += 200;
  }
}