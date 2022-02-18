function add(num1, num2) {
    return num1 + num2;
}

// arrow function
const add1 = function add(num1, num2) {
    return num1 + num2;
}

const add2 = function (num1, num2){
    return num1 + num2;
}

const add3 = (num1, num2) => num1 + num2;
const sum = add2(11, 12);
const sum1 = add2(13, 12);
const sum2 = add3(12, 12);

console.log(sum, sum1, sum2);