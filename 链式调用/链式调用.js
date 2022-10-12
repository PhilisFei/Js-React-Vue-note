var sched = {
    wakeup: function(){
        console.log('Running');
        return this;
    },
    morning: function(){
        console.log('Going shopping');
        return this;
    },
    noon: function(){
        console.log('Having a rest');
        return this;
    },
    afternoon: function(){
        console.log('Studying');
        return this;
    },
    evening: function(){
        console.log('Walking');
        return this;
    },
    night: function(){
        console.log('Sleeping');
        return this;
    }
};

sched.wakeup().morning().noon().afternoon().evening().night();