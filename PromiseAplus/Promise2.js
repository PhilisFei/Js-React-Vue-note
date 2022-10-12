const PENDING = 'PENDING',
      FULFILLED = 'FULFILLED',
      REJECTED = 'REJECTED';

function resolvePromise(promise2, x, resolve, reject){
    console.log(x);
}

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

    //x 普通值 promise
    then(onFulfilled, onRejected){
        let promise2 = new MyPromise((resolve, reject) => {
            if(this.status === FULFILLED){
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
    
            if(this.status === REJECTED){
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                }, 0);
            }
    
            if(this.status === PENDING){
                //订阅(收集所有的成功或失败的回调函数)(主要处理异步的promise)
                this.onFulFilledCallbacks.push(() => {
                    try {
                        let x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
                this.onRejectedCallbacks.push(() => {
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });

        return promise2;
    }
}

module.exports = MyPromise;