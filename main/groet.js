function getDivisorsCnt(n) {
  let countDivisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      countDivisors++;
    }
  }
  return countDivisors;
}

console.log(getDivisorsCnt(12));
