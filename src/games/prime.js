import { check, getRandomInt } from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const startPrimeGame = () => {
  const number = getRandomInt();
  const result = check(isPrime, number);

  return [result, number];
};