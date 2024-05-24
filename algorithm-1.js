/*
    arrays - Big O notation
    Insert/remove at end - O(1)
    Insert/remove at beginning - O(n)
    Access - O(1)
    Search - O(n)
    Push/Pop - O(1)
    Shift/Unshift/concat/slice/splice - O(n)
    forEach/map/filter/reduce - O(n)
 *  
 * */

//Math Algorithms

//Given a number n find the first n elements of the fibonacci sequence

const fibonacciSequence = (number) => {
  const sequence = [0, 1];
  //   if (number === 1) {
  //     return [];
  //   } else {
  //     for (let index = 2; index < number; index++) {
  //       sequence.push(sequence[index - 1] + sequence[index - 2]);
  //     }
  //     return sequence;
  //   }
  for (let i = 2; i < number; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
};
//Big(O) = O(n)

console.log(fibonacciSequence(1));

//Factorial of a number

const factorial = (n) => {
  let factorial = 1;
  for (let index = 2; index <= n; index++) {
    factorial *= index;
  }
  return factorial;
};

//Big(O) = O(n)
console.log(factorial(0));

//Prime Number or not

function primeNumberCheck(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n / 2; i++) {
    console.log(n / 2);
    if (n % i === 0) {
      return (result = false);
    }
  }
  return true;
}
//big O = O(sqrt(n))

console.log(primeNumberCheck(18));

//Power of two if there exists an integer x such that n === 2^x

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
    console.log(n);
  }
  return true;
} //O(logn)

const usingBitWise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};
//O(1)

console.log(isPowerOfTwo(256));
console.log(usingBitWise(256));

//Recursive Fibonacci
function recursiveFinonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFinonacci(n - 1) + recursiveFinonacci(n - 2);
}

console.log(recursiveFinonacci(6));

//O(n) = Iterative solution
//O(2^n) = Recursive solution

//Recursive factorial of a number

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(4));

//Big(O) = O(n)
