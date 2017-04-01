var emp = {name:'Ashis', height:'5.6', age:30};

console.log(typeof emp);
console.log(isNaN(emp));
console.log(isNaN(NaN));
console.log(typeof NaN);
console.log(typeof new Date());

function demo(){
	return "Demo";
}

console.log(emp.constructor);
console.log(demo.constructor);
console.log(new Date().constructor);
console.log("Jhon".constructor);
console.log((12.3).constructor);
console.log(false.constructor);
console.log([1,2,3].constructor);

function isArray(arr){
	// return arr.constructor.toString().indexOf("Array") > 1;
	return arr.constructor === Array;
}

function isDate(date){
	// return date.constructor.toString().indexOf("Date") > 1;
	return date.constructor === Date;
}

console.log(isArray([1,2]));
console.log(isArray(emp));
console.log(isDate(new Date()));
console.log(new Date() instanceof Date);

console.log(Number(false));
console.log(Number(true));
var date = new Date();
console.log(Number(date)); // Returns milliseconds
console.log(date.getTime());



