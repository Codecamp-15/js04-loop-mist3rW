// 2 players

// 1st player: prompt number 1-99, dont show to 2nd player
// 2nd player: prompt number repeat untill == 1st player's input
// alert 'too high' or 'too low' if incorrect
// if input match alert 'Correct' and show count

let count = 0;
let num2;
let num1;

do {
  num1 = prompt("Player 1: Enter your number");
  if (num1 === null || num1.trim() == "" || isNaN(num1)) {
    alert("Please select between 1-99");
  } else if (num1 < 1 || num1 > 99) {
    alert("Please select between 1-99");
  }
} while (num1 === null || num1.trim() == "" || isNaN(num1) || num1 == 0);

do {
  num2 = prompt("Guese Player 1 Selected Number");
  if (num2 > num1) {
    alert("Too high ! Try Again");
  } else if (num2 < num1) {
    alert("Too low! Try Again");
  } else {
    alert(`Corrected, you took ${count + 1} attemps`);
  }
  count++;
} while (num1 != num2);
