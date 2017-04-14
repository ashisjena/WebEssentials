function gizmo(id) {
    return {
        id : id,
        toString : function() {
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function(testId) {
        return testId === this.id;
    };
    return that;
}

// making "id" as private and not accesible from outside
/*function gizmo(id) {
    return {
        toString : function() {
            return "gizmo " + id;
        }
    };
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function(testId) {
        return testId === id;
    };
    return that;
}*/

var hoozitObj = new hoozit(5);
console.log(hoozitObj);
console.log(hoozitObj.toString());
console.log(hoozitObj.test(5));