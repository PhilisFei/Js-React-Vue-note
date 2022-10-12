const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

class MyPromise{
    constructor(executor){
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;

        this.onFulFilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value) => {
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                //发布
                this.onFulFilledCallbacks.forEach(fn => fn());
            }
        }

        const reject = (reason) => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;
                //发布
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try{
            executor(resolve, reject);
        }catch(e){
            reject(e);
        }
    }

    then(onFulfilled, onRejected){
        if(this.status === FULFILLED){
            onFulfilled(this.value);
        }

        if(this.status === REJECTED){
            onRejected(this.reason);
        }

        if(this.status === PENDING){
            //订阅(收集所有的成功或失败的回调函数)(主要处理异步的promise)
            this.onFulFilledCallbacks.push(() => {
                onFulfilled(this.value);
            });
            this.onRejectedCallbacks.push(() => {
                onRejected(this.value);
            });
        }
    }
}

module.exports = MyPromise;