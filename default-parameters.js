function add (num1, num2 = 100) {
    // num2 = num2 || 0;
  /*   if (num2 == undefined){
        num2 = 0;
    } */
    
    const total = num1 + num2;
    return total;
}
const result = add (15, 0);
console.log(result);

function fullName (first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const adds = fullName ('mahid', 'hasan');
console.log(adds)