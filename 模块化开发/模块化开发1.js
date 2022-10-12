var inherit = (function(){
    var Buffer = function(){};
    return function(Target, Origin){
        Buffer.prototype = Origin.prototype;
        Target.prototype = new Buffer();
        Target.prototype.constructor = Target;
        Target.prototype.super_class = Origin;
    }
})();

var initProgrammer = (function(){
    var Programmer = function(){};
    Programmer.prototype = {
        name: '程序员',
        tool: '计算机',
        work: '编写应用程序',
        duration: '10个小时',
        say: function(){
            console.log(
                '我是一名' + 
                this.myName + 
                this.name + 
                '， 我的工作是用' + 
                this.tool + 
                this.work + 
                '，我每天工作' + 
                this.duration + 
                '，我的工作需要用到' + 
                this.lang.toString() + 
                '。');
        }
    };

    function FrontEnd(){}
    function BackEnd(){}

    inherit(FrontEnd, Programmer);
    inherit(BackEnd, Programmer);

    FrontEnd.prototype.lang = ['HTML', 'CSS', 'JavaScript'];
    FrontEnd.prototype.myName = '前端';

    BackEnd.prototype.lang = ['Node', 'Java', 'SQL'];
    BackEnd.prototype.myName = '后端';

    return {
        FrontEnd: FrontEnd,
        BackEnd: BackEnd
    }
})();

var frontEnd = new initProgrammer.FrontEnd();
var backEnd = new initProgrammer.BackEnd();

frontEnd.say();
backEnd.say();