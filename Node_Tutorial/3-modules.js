
// Common JS - every file is a module (by default)
// Modules - Encapsulated code (only share minimun) 


//ES6 way to import anything
// import { john, peter } from './4-names';
// import sayHi from './5-utils';

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade')  //When you import a module you actually invoke it


sayHi("Susan");
// sayHi(john);
// sayHi(peter);

sayHi(names.john);
sayHi(names.peter);

console.log(data);