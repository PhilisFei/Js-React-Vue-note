//圣杯模式的逻辑
function Teacher(){}
function Student(){}
function Buffer(){}
Buffer.prototype = Teacher.prototype;
var buffer = new Buffer();
Student.prototype = buffer;
var s = new Student();
var t = new Teacher();