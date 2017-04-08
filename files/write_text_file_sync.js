'use strict';
const fs = require('fs');
console.log('>>> BEGIN >>>');

var data = 'Hello,Node.js!';
fs.writeFileSync('.\\files\\output1.txt',data);
console.log('>>> END >>>');