const operations = [
    function(a, b) {
        return a + b;
    },

    function(a, b) {
        return a - b;
    },

    function(a, b) {
        return a * b;
    }
];

operations.forEach(function(operation) {
    console.log(operation(4, 2));
});
