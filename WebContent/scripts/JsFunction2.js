function fact(n) {
	var result = 1; // result: variable
	while (n > 1) {
		result *= n;
		n -= 1;
	}
	return result;
}

var factorial = function(n) {
	return (function(result) { // result: parameter
		while (n > 1) {
			result *= n;
			n -= 1;
		}
		return result;
	}(1));
}

console.log(factorial(3));

// This is slow and inefficient as every time it will create a array upon
// invocation
var digit_name1 = function(n) {
	var names = [ 'zero', 'one', 'two', 'three', 'three', 'four', 'five',
			'six', 'seven', 'eight', 'nine' ];

	return names[n];
}

var digit_name2 = (function() {
	var names = [ 'zero', 'one', 'two', 'three', 'three', 'four', 'five',
			'six', 'seven', 'eight', 'nine' ];
	return function(n) {
		return names[n];
	}
}());

console.log(digit_name1(3));
console.log(digit_name2(3));
