// ======================== 04 ES Modules ========================== //

import { capitalizeWords, makeMoney } from './modules/utils.js';
import Person from './modules/Person.js';

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('Emilia', 20);
person1.greet();
