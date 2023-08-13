for (i = 2; i <= 100; i++) {
  let isPrime = true;
  for (div = 2; div < i; div++) {
    if (i % div == 0) {
      isPrime = false;
    }
  }
  if (isPrime) console.log(`${i} is prime number`);
}
