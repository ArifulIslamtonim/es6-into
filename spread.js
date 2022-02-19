const numbers = [23, 44, 55, 22];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 34);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 90];
numbers.push(33, 66);
console.log(numbers);
console.log(numbers2);
