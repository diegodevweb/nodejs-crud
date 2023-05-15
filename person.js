class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        return `It's me, ${this.name}!`;
    }
}

module.exports = {
    Person,
}