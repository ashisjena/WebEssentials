function new_constructor(initilizer, methods, extend) {
    var prototype = Object.create(typeof extend === 'function' ? extend.prototype : extend);
    
    if (methods) {
        Object.keys(methods).forEach(function(key) {
            prototype[key] = methods[key];
        });
    }
    
    function constructor() {
        var that = Object.create(prototype);
        if (typeof initializer === 'function') {
            initializer.apply(that, arguments);
        }
        return that;
    }
    
    constructor.prototype = prototype;
    prototype.constructor = constructor;
    return constructor;
}

var gizmo = new_constructor(Object, function(id) {
    this.id = id;
}, {
    toString : function() {
        return "gizmo : " + this.id;
    }
});

var hoozit = new_constructor(gizmo, function(id) {
    this.id = id;
}, {
    test : function(id) {
        return this.id === id;
    }
});




