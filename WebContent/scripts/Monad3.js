// The Maybe Monad

function MONAD(modifier) {
    var prototype = Object.create(null);
    
    function unit(value) {
        var monad = Object.create(prototype);
        monad.bind = function(func){
            return func.apply(undefined, [value].concat([].slice(arguments)));
        };
        
        if(typeof modifier === 'function'){
            modifier(monad, value);
        }
        
        return monad;
    }
    
    return unit;
}

var maybe = MONAD(function (monad, value) {
                    if(value === null || value === undefined) {
                        monad.is_null = true;
                        monad.bind = function() {
                            return monad;
                        };
                    }
                });


function println(){
    console.log("Hello ");
    console.log(arguments);
}

var monad = maybe(1);
console.log(monad.bind.toString());
monad.bind(println);

monad = maybe(null);
console.log(monad.bind.toString());
console.log(monad.bind(println));
