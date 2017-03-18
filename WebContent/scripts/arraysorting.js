var numArr = [12,34,111,6,16,2];
console.log(numArr.sort());

numArr.sort(function(a, b){return a - b}); // Sort Array in ascending order.
console.log(numArr);
/*
 * When comparing 40 and 100, the sort() method calls the compare function(40,100).
 * The function calculates 40-100, and returns -60 (a negative value).
 * The sort function will sort 40 as a value lower than 100.
 */
numArr.sort(function(a, b){return b - a}); // Sort Array in descending order.
console.log(numArr);

// Comparing objects
var cars = [
	{type:'Volvo', year:2016},
	{type:'Maruti', year:2019},
	{type:'Toyota', year:2001},
	{type:'Honda', year:2005}
	]

cars.sort(function(a, b){return a.year - b.year});
console.log(cars);

// Comparing object string property
console.log('---------------------------------------');
cars.sort(function(a, b){
	var x = a.type.toLowerCase();
	var y = b.type.toLowerCase();

	if(x < y)
		return -1;
	else if(x > y)
		return 1;
	else 
		return 0;
});

console.log(cars);

