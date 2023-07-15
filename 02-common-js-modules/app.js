const { capitalizeWords, makeMoney } = require('./utils');
const Person = require('./Person');

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const personOne = new Person('Emilia', 20);
console.log(personOne.greet());
