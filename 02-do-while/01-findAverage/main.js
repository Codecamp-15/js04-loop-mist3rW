// #number input from user
// #continue prompt untill == 0 || negative num || '' || cancel || escape
// find sum and average of num input from user

let sum = 0;
let count = 0;
let num;
let avgNum;

do {
  let num = prompt("Enter your number");
  if (num > 0) {
    sum += +num;
  } else {
    break;
  }
  count++;
  avgNum = sum / count;
} while (num !== 0 || num <= 0 || num.trim() == 0 || isNaN(num));

console.log(`Total: ${sum},Average: ${avgNum}, Count: ${count}`);
