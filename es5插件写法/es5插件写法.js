;(function(){
    var Compute = function(opt){
        this.x = opt.firstNum || 0;
        this.y = opt.secondNum || 0;
    }

    Compute.prototype = {
        plus: function(){
            return this.x + this.y;
        },
        minus: function(){
            return this.x - this.y;
        },
        mul: function(){
            return this.x * this.y;
        },
        div: function(){
            return this.x / this.y;
        }
    }

    window.Compute1 = Compute;
})();

;(function(){
    var Compute = function(){}

    Compute.prototype = {
        plus: function(a, b){
            return a + b;
        },
        minus: function(a, b){
            return a - b;
        },
        mul: function(a, b){
            return a * b;
        },
        div: function(a, b){
            return a / b;
        }
    }

    window.Compute2 = Compute;
})();

//使用插件
var compute1 = new Compute1({
    firstNum: 1,
    secondNum: 2
});
compute1.plus();

var compute12 = new Compute2();
compute2.minus(1, 2);