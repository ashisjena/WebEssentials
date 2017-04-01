var person = {
	fname : "Ashis",
	lname : "Jena",
	age : 30,
	job : "SoftwareEngineer",
	toObjString : function() {
		var key;
		var txt = "";
		for (key in this) {
			if (typeof this[key] === 'function') {
				continue;
			}
			txt += this[key];
		}
		return txt;
	}
};

console.log(person.fname)
console.log(person["fname"]);
var x = "fname";
console.log(person[x]);

function toObjString(obj) {
	var key;
	var txt = "";
	for (key in obj) {
		if (typeof obj[key] === 'function')
			continue;
		txt += obj[key];
	}
	return txt;
}

console.log(toObjString(person));
console.log(person);

person.nationality = "Indian";
console.log(toObjString(person));

delete person.age;
// delete person["age"];
console.log(person.toObjString());

