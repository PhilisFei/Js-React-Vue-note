window.onload = function(){
    init();
}

function init(){
    //企业的模块化开发(按需执行)
    initCompute();
    initFunctions();
}

var initCompute = (function(){
    var a = 1,
        b = 2;

    function add(){
        console.log(a + b); 
    }

    function minus(){
        console.log(a - b); 
    }

    function mul(){
        console.log(a * b); 
    }

    function div(){
        console.log(a / b); 
    }

    return function(){
        add();
        minus();
        mul();
        div();
    }
})();

var initFunctions = (function(){
    return function(){

    }
})();

//插件化开发(即时执行)
;(function(){
    var Slider = function(opt){}

    Slider.prototype = {

    }

    window.Slider = Slider;
})();

var slider = new Slider({

});