function Emp(fname, lname, age, job) {
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	this.job = job;
	this.fullName = function() {
		return this.fname + ' ' + this.lname;
	};
}

var emp1 = new Emp('Ashis', 'Jena', 30, 'Software Engineer');

console.log(emp1.fullName());

// SINGLETON object using self invoking function through closure
var Singleton = (function() {
	var instance;

	function createInstance() {
		return {};
	}

	/*return {
		getInstance : function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};*/
	
	function getInstance(){
		if (!instance) {
			instance = createInstance();
		}
		return instance;
	}
	
	return {getInstance};
})();

var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log(instance1);
console.log(typeof instance1);
console.log(instance1 === instance2);
instance1.name = 'Ashis';
console.log(instance1);
console.log(instance2);
console.log(instance1 === instance2);


