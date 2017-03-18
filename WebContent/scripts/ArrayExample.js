var fruits = ["Orange", "Apple", "Bannana", "Grapes", "Mango"];
console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);

console.log(fruits);
console.log(fruits.join('*'));

// Push method returns Array length
console.log(fruits.push("Watermelon"));
console.log(fruits.push("Kiwi"));
console.log(fruits);

console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

console.log(fruits.shift()); // Removes an element in the beginning
console.log(fruits);

console.log(fruits.unshift("Lemon")); // Adds an element in the beginning.
console.log(fruits);

for(var i=0; i < fruits.length; i++)
	console.log(fruits[i]);

console.log(delete fruits[0]); // returns true, and changes the first element to "undefined". Recommended to use pop() or shift();
console.log(fruits);

fruits.unshift("Guava");
console.log(fruits);

console.log(fruits.sort());
fruits.pop();

fruits.splice(3,0,'Jack Fruit', 'Orange') // 3 is the position/index of addition, 0 is the no of elements to be deleted from the specified position, elements to be added(optional)
console.log(fruits);

fruits.splice(3,1); // using splice to delete one element
console.log(fruits);

var flowers = ['Rose', 'Jasmine', 'MariGold'];

var joinedArray = fruits.concat(flowers); // Returns a concatenated array.
console.log(joinedArray);

var newSlicedArray = joinedArray.slice(3); // Returns a new subArray from the starting position
console.log(newSlicedArray);
console.log(joinedArray.slice(3, 7)); // Returns a new subArray from the starting position(including) to till the end position(excluding);

console.log(fruits.sort());
console.log(fruits.reverse()); // Reverse the order of the elements.

