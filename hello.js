'use strict';
var s = 'hello';
var b = 'bye';
function greet(name) {
    console.log(s + ',' + name + '!');
}
function bye(name){
    console.log(b + ',' + name + '!');
}
exports.greet = greet;
exports.bye = bye;
