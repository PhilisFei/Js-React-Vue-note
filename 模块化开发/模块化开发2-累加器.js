var sum = (function(n){
    if(n <= 1){
        return 1;
    }
    return n + arguments.callee(n-1);
})(10);

console.log(sum)