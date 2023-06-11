function multiplesOf3and5(number) {
  return Array(number).fill(0).map((_, i) => {
    return i % 3 === 0 || i % 5 === 0 ? i : 0
  }).reduce((a, b) => a + b, 0)
}

console.log(multiplesOf3and5(49));
