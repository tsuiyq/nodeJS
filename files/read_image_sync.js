'use strict';
//read from 'sample.JPG'
const fs = require('fs');

console.log('>>> BEGIN >>>');

var data = fs.readFileSync('.\\files\\sample.JPG');

console.log(data);
console.log(data.length + ' bytes');

console.log('>>> END >>>');