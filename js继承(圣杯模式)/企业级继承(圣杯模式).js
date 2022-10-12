function Teacher(){
    this.name = 'Mr. Li';
    this.tSkill = 'JAVA';
}

Teacher.prototype = {
    pSkill: 'JS/JQ'
}

var t = new Teacher();
console.log(t);

function Student(){
    this.name = 'Mr. Wang';
}

function Buffer(){}
Buffer.prototype = Teacher.prototype;
var buffer = new Buffer;
Student.prototype = buffer;
Student.prototype.age = 18;

var s = new Student();
console.log(s);
