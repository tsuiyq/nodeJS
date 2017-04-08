'use strict';
//read from 'sample.JPG'
const fs = require('fs');
console.log('>>> BEGIN >>>')
fs.readFile('.\\files\\sample.JPG', function (err,data){
    if (err){
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
console.log('>>> END >>>');