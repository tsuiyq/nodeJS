'use strict';
var s = 'hello';
var b = 'bye';
function greet(name) {
    console.log(s + ',' + name + '!');
}
function bye(name){
    console.log(b + ',' + name + '!');
}
exports.greet1 = greet;
exports.bye1 = bye;
