const user = {
    name: "Carlos",

    traditional: function() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this.name);
    }
};

user.traditional(); // Carlos
user.arrow();       // undefined (em muitos ambientes)
