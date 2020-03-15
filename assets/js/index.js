let number;
// Find all the prime circular numbers and return them in an array
const findCircular = num => {
  let str = String(num);
  let res = [];
  let n = str.length;
  for (let i = 0; i < n; i++) {
    res.push(parseInt(str));
    let last = str[n - 1];
    str = str.substring(0, n - 1);
    str = last + str;
  }
  return res;
};

// Returns 1 if the input is a prime number and 0 otherwise
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return 0;
    }
  }
  return 1;
};

// Prints all circular primes below or equal to input
const numsCircularPrime = number => {
  number = document.querySelector("#userInput").value;
  let circularPrimes = [];
  for (let i = 2; i <= number; i++) {
    let circular = findCircular(i);
    let isCir = 1;
    for (let j = 0; j < circular.length; j++) {
      if (!isPrime(circular[j])) {
        isCir = 0;
      }
    }
    if (isCir) {
      circularPrimes.push(i);
    }
  }
  // console.log(circularPrimes);
  return (document.querySelector(
    ".answer"
  ).innerHTML = `The circular primes numbers for ${number} are: ${circularPrimes.join(
    " ,"
  )}.`);
};
