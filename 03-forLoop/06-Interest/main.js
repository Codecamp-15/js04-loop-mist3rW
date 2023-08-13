let cash = 100_000;

for (i = 1; i <= 10; i++) {
  let interest = 2.5 / 100;
  cash += cash * interest;
  console.log(`Year ${i}, Cash = ${cash.toFixed(2)}`);
}
