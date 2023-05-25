// Task 2
const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1);
};

console.log(factorial(5));

// Task 3
const array = [2, 6, 11, -4, 0, -3];

// var 1
const arrayMultiplied = [];

for (number of array) {
  arrayMultiplied.push(number * 2);
}

console.log(arrayMultiplied);

//var 2
const arrayMultipliedByMap = array.map((number) => number * 2);

console.log(arrayMultipliedByMap);
