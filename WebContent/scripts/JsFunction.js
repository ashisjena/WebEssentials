function findMax() {
	var max = -Infinity;
	var i;
	for (i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	console.log(arguments.callee); // Reference to the currently executing function.
	return max;
}

console.log(findMax(12, 1, 5, 23, 51, 3, 61));

function myFunction() {
	return this;  // This will return the window Object or the global object.
}

// console.log(myFunction());

var myObject = {
		firstName: "Ashis",
		lastName: "Jena",
		fullName: function(){
			return this; // This will return the owner Object ( myObject)
		}
}

console.log(myObject.fullName());

function multiplyTwoNumbers(a, b){
	return a * b;
}

console.log(multiplyTwoNumbers.call(this, 12, 5)); // First arguments should be the owner object
console.log(multiplyTwoNumbers.apply(this, [12, 5])); // First arguments should be the owner object, and other should be in an Array.


// Function closure.
var add = (function (){
	var counter = 0;
	return function(){
		return ++counter;
	}
})();  // Self invoking function

add();
add();
console.log(add());
/*
 * The variable "add" is assigned the return value of the a self invoking function.
 * The self invoking function only runs once. It sets the counter to Zero(0), and returns a function expression.
 * This way the add becomes a "function" (function(){return ++counter};) and it can access the "counter" variable in it's parent scope.
 * This is called a "JavaScript closure". It makes it possible for a function to have "private" variables. 
 * The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
 * 
 * A "closure" is a function having access to the parent scope, even after the parent function has closed.
 */
