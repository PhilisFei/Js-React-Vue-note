const MyPromise = require('./Promise3');

let promise1 = new MyPromise((resolve, reject) => {
    resolve('promise1');
    // reject('Error');
});

let promise2 = promise1.then((value) => {
    // return new Error('Error');
    // return Promise.resolve('Promise resolve');
    // return 'Then Promise';
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(new MyPromise((resolve, reject) => {
                resolve(new MyPromise((resolve, reject) => {
                    resolve('new Promise resolve');
                }));
            }));
        }, 2000);
    });
}, (reason) => {
    return reason;
});

promise2.then().then().then().then().then((value) => {
    throw Error('Error');
}, (reason) => {
    console.log(reason);
})
.catch((e) => {
    console.log(e);
});