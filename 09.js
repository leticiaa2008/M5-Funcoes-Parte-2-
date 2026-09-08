function calculate(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate(4, 2, sum));      // 6
console.log(calculate(4, 2, multiply)); // 8
