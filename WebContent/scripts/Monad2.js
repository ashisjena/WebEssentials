// AJAX monad

function MONAD() {
    var prototype = Object.create(null);
    
    function unit(value) {
        var monad = Object.create(prototype);
        
        monad.bind = function(func, args) {
            return func(value, ...args);
        }

        return monad;
    }
    
    unit.lift = function(name, func) {
        prototype[name] = function(...args) {
            return unit(this.bind(func, args));
        };
        return unit;
    };
    
    return unit;
}

var unit = MONAD().lift('alert', alert);
var monad = unit("Hello World.");

monad.bind(alert);
// or
monad.alert();

//MONAD().lift('alert', alert)("Hello World").alert();