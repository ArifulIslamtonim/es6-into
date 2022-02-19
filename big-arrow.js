const add = (num1, num2) => num1 + num2;
const sum = add(22, 90);

const multiple = (num1, num2, num3) => num1 * num2 * num3;
const result = multiple(2, 3, 4);

const tenTime = (num1) => num1 * 10;
const ouptput = tenTime(80);

const getName = () => 'latu';
const name = getName();

// console.log(name);
// console.log(ouptput);
// console.log(result);
// console.log(sum);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(12, 3);
console.log(total);
