function funky(o) {
    o = null;
}

var x = [];
funky(x);

console.log(x);
console.log(typeof x);
console.log(Array.isArray(x));

function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
}

var x = 1, y = 2;
swap(x, y);
console.log(x);

var add = function(a, b) {
    return a + b;
}

var mul = function(a, b) {
    return a * b;
}

var addf = function(a) {
    return function(b) {
        return a + b;
    };
}

console.log(addf(3)(4));

var applyf = function(binaryFunc) {
    return function(a) {
        return function(b) {
            return binaryFunc(a, b);
        };
    };
}

console.log(applyf(add)(3)(4));

var curry = function(binaryFunc, first) {
    /*return function(second) {
        return binaryFunc(first, second);
    };*/  // Or
    return applyf(binaryFunc)(first);
}

console.log(curry(add, 3)(4));

var inc1 = addf(1);
var inc2 = applyf(add)(1);
var inc3 = curry(add, 1);


console.log(inc1(5));
console.log(inc3(inc3(5)));

var methodize = function(func){
    return function(y){
        //return applyf(func)(this)(y);
        //return curry(func, this)(y);
        return func(this, y);
    };
}

Number.prototype.add = methodize(add);

console.log((3).add(4));

var demethodize = function(func) {
    return function(that, y){
        return func.call(that, y);
    };
}

console.log(demethodize(Number.prototype.add)(5, 6));

var twice = function(func){
    return function(x){
     return func(x, x);   
    };
}

var double = twice(add); 
var square = twice(mul); 
console.log(double(11));
console.log(square(11));

var composeu = function(unary1, unary2){
    return function(x){
      return unary2(unary1(x));  
    };
}

console.log(composeu(double, square)(3));

var composeub = function(bfun1, bfun2){
    return function(x, y, z){
        return bfun2(bfun1(x,y),z);
    };
}

console.log(composeub(add, mul)(2, 3, 5));


// Write a function that will run only once
/*var once = function(func){
    var firstTime = true;
    return function(x, y){
        if(firstTime){
            firstTime = false;
            return func(x, y);
        } else{
            throw "Error";
        }
    };
}*/ // or

var once = function(func){
    return function(){
        var f = func;
        func = null;
        return f.apply(this, arguments);
    };
}

var add_once = once(add);
console.log(add_once(2, 4));
// console.log(add_once(2, 4)); If you call second time it will be error


var counterf = function(x){
    return {
            inc : function(){return x += 1;},
            dec : function(){return x -= 1;}
        };
}

var counter = counterf(10);
console.log(counter.inc());
console.log(counter.dec());

var revocable = function(func){
    return{
        invoke : function(){
            console.log('Invoked');
            return func.apply(this, arguments);
        },
        revoke : function(){
            func = null;
            console.log('Revoked');
        }
    };
}

var temp = revocable(add);
console.log(temp.invoke(3, 4));
temp.revoke();
console.log(temp.invoke(3, 4));



