function inherit(Target, Origin){//Target 继承 Origin
    function Buffer(){}
    Buffer.prototype = Origin.prototype;
    Target.prototype = new Buffer();
    Target.prototype.constructor = Target;
    //保存继承源
    Target.prototype.super_class = Origin;
}

//how to use it
function Teacher(){}
function Student(){}
inherit(Student, Teacher);
var s = new Student();
var t = new Teacher();