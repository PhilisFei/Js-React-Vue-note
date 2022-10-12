var inherit = (function(){
    var Buffer = function(){};
    return function(Target, Origin){
        Buffer.prototype = Origin.prototype;
        Target.prototype = new Buffer();
        Target.prototype.constructor = Target;
        Target.prototype.super_class = Origin;
    }
})();

//how to use it
function Teacher(){}
function Student(){}
inherit(Student, Teacher);
var s = new Student();
var t = new Teacher();