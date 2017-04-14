// Functions are different types
// 1. First Class functions
// 2. Higher Order Functions
// 3. Lexical Closure


// Programming without side-effects.
// Remove assignment, loops(use recursion instead), freeze all array literals and object literals.
// Remove Date and Math.random.

// Memoization
// Caching

// Monads
// A loophole in the function contract.

// Identity monad
function MONAD(){
    return function unit(value){
        var monad = Object.create(null);
        monad.bind = function(func){
            return func(value);
        };
        return monad;
    };
}

function print(){
    console.log(arguments[0]);
}

var unit = MONAD();
var monad =  unit("Hello World!");
monad.bind(print);

// Axioms
// 1. unit(value).bind(func) ==== func(value)
// 2. monad.bind(unit) ==== monad
// 3. monad.bind(func).bind(g) ==== monad.bind(function(value){
//                                              return func(value).bind(g);
//                                             })

//ADsafe
var input = dom.q("input_text")
            .on('entrykey', function(e){
                dom.q('#ROMAN_RESULT')
                    .value(roman(input.
                                    getValue()));
                input
                    .select();
            })
            .focus();