function validateNumber(n) {
    if (typeof n !== "number") {
        throw new Error("O valor deve ser um número.");
    }
    return true;
}

console.log(validateNumber(10)); // true
// console.log(validateNumber("10")); // Erro