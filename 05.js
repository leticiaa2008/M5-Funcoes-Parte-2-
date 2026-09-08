function applyFunction(fn, value) {
    return fn(value);
}

function double(n) {
    return n * 2;
}

console.log(applyFunction(double, 5)); // 10
console.log(applyFunction(Math.sqrt, 16)); // 4
