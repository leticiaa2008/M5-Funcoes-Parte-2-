function factorial(n) {
    if (n < 0) {
        throw new Error("O número não pode ser negativo.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
