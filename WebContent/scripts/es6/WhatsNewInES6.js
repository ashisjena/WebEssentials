'use strict';
var str = 'To be, or not to be, that is the question';

console.log(str.startsWith('To be'));
console.log(str.startsWith('not to be'));
console.log(str.startsWith('not to be', 10));

console.log(str.endsWith('question'));
console.log(str.endsWith('to be'));
console.log(str.endsWith('to be', 19));

console.log(str.includes('To be'));
console.log(str.includes('To be', 1));

console.log('abc'.repeat(0)); // ''
console.log('abc'.repeat(1)); // 'abc'
console.log('abc'.repeat(2)); // 'abcabc'
console.log('abc'.repeat(3.5)); // 'abcabcabc' (count will be converted to integer)
/*
console.log('abc'.repeat(-1)); //RangeError
console.log('abc'.repeat(1/0)); // RangeError
*/

console.log(`Back tick as String Enclosure`);

var a = 5, b = 6;
console.log(`This is a template String : ${a+b}`);

var map = new Map();
map.set('contra', {description: 'Asynchronous flow control'});
map.set('dragula', {description: 'Drag and drop'});
map.set('woofmark', {description: 'Markdown and WYSIWYG editor'});
console.log(map);

for(var [key, value] of map){
    console.log(key + " = " + value);
}

for(var key of map.keys()){
    console.log(key);
}

for(var value of map.values()){
    console.log(value);
}

for(var [key, value] of map.entries()){
    console.log(key + " = " + value);
}

var set = new Set([1, 2, 3, 3]);
set.add(2);
console.log([...set]);

for(let item of set){
    console.log(item);
}
for(let item of set.keys()){
    console.log(item);
}
for(let item of set.values()){
    console.log(item);
}

