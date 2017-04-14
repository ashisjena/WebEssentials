function Person(fname, lname, age) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.fullName = function() {
		return this.fname + ' ' + this.lname;
	}
}

Person.prototype.nationality = "English"; // We can give default value here;

var p1 = new Person("Ashis", "Jena", 15);
console.log(p1.nationality);
console.log(p1);
/*p1.nationality = "Indian";
console.log(p1);*/

function demo(object) {
	for (name in object) {
		if (Object.prototype.hasOwnProperty.call(object, name)) { // object.hasOwnProperty() // This will not print any inherited prototype property
			console.log(name);
		}
	}
}

demo(p1);

var a = 0.1;
var b = 0.2;
var c = 0.3;

if ((a + b) + c === a + (b + c)) {  //Decimal fractions are approximate, so will return Not Equal
	console.log("Equal");
} else {
	console.log("Not Equal");
}

console.log((a + b) + c);
console.log(a + (b + c));