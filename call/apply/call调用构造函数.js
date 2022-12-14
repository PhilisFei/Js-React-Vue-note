function Car(brand, color, displacement){
    this.brand = brand;
    this.color = color;
    this.displacement = displacement;
    this.info = function(){
        return '排量为' + this.displacement + '的' + this.color + this.brand;
    }
}

function Person(opt){
    Car.apply(this, [opt.brand, opt.color, opt.displacement]);
    this.name = opt.name;
    this.age = opt.age;
    this.say = function(){
        console.log(
            '年龄' + 
            this.age + 
            '岁姓名为' + 
            this.name + 
            '买了一辆' + 
            this.info()
        );
    }
}

var p = new Person({
    brand: '奔驰',
    color: '红色',
    displacement: '3.0',
    name: '张三',
    age: '25'
});

p.say();