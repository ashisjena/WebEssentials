"use strict";
var str = "Visit W3Schools";
console.log(str.search(/w3schools/));
console.log(str.search(/w3schools/i)); // Ignore case(i), Global match(g), Multiline matching(m)
console.log(str.replace(/w3schools/i, "google.com"));
console.log(str.replace("W3Schools", "google.com"));

var result = /good/.test("I'm a good guy");  // test and exec are regular expression methods.
console.log(result);

result = /good/.exec("I'm a verygood guy");
console.log(result);

try {
	try {
		invalidReference.value = 5;
	} catch (e) {
		console.log(e.message); // There are two properties of an error object "message and name".
		console.log(e.name);
		// console.log(e);
		// throw "Custom Error";
		throw 777; // throwing an integer
	} finally {
		console.log("\"finally\" will get executed irrespectively");
	}
} catch (e) {
	console.log(e.name);
	console.log(e);
	throw e;
}