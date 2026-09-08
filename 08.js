const user = {
    name: "Maria",

    sayHi: function() {
        return `Olá, ${this.name}!`;
    }
};

console.log(user.sayHi());
// Olá, Maria!
