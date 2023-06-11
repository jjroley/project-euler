function fiboEvenSum(n) {
  let n1 = 1
  let n2 = 2
  let sum = 2

  while(n2 <= n) {
    let temp = n2
    n2 += n1
    n1 = temp

    if( n2 % 2 === 0 ) {
      sum += n2
    }
  }

  return sum;
}
