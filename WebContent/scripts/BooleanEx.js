console.log(Boolean(10 > 9));

if(-15 && "false") // "Hello", "false"... Every thing with a real value is true.
	console.log('TRUE');

console.log(Boolean(0)); // Everything without a "Real" is false.
console.log(Boolean(""));
console.log(Boolean(undefined));
var x;
console.log(Boolean(x));
console.log(Boolean(null));
console.log(Boolean(false));
console.log(Boolean(10 / "H")); // Boolean value of NaN is false.