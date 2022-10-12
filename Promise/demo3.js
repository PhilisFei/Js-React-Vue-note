const fs = require('fs');

let num = 0;

function readFile(path, isSetError){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function(err, data){
            if(err || isSetError){
                reject('承诺石沉大海了' + num++);
            }

            const resData = JSON.parse(data);

            resolve(resData);
        });
    });
}

/*
Promise.all([
    readFile('./data/user.json'),
    readFile('./data/userClass.json', true),
    readFile('./data/class.json')
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err)
});
*/

readFile('./data/user.json').then((res) => {
    console.log(res);

    return Promise.resolve('成功啦~~~~~~~~');
    //return new Promise((resolve, reject) => { resolve('成功啦~~~~~~~~') })
})
.then((res) => {
    console.log(res);
});