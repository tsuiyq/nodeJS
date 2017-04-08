'use strict';
//read from text 'sample.txt' with sync
const fs = require('fs');

console.log('>>> BEGIN >>>');

var data = fs.readFileSync('.\\files\\sample.txt','utf-8');
console.log(data);

console.log('>>> END >>>');
