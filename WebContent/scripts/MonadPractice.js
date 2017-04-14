function MONAD(){
    var prototype = Object.create(null);
    
    function unit(value){
        var monad = Object.create(prototype);
        
        monad.bind = function(func){
            var args = Array.prototype.slice.call(arguments);
            if(value != null) {
                args.unshift(value);
            }
            var index = args.indexOf(func);
            if (index >= 0) {
                args.splice( index, 1 );
            }
            
            return func.apply(undefined, args);
        };
        
        return monad;
    }
    
    unit.lift = function(name, func) {
        prototype[name] = function(){
            return unit(this.bind.apply(undefined, [func].concat([].slice.call(arguments))));
        };
        
        return unit;
    }
    
    return unit;
}

function print(value){
    console.log(value);
}

MONAD()("Hello World").bind(print);

MONAD().lift('print', print)("Hello World").print().bind(print, "Calling bind from monad");