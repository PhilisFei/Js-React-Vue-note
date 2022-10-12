const fs = require('fs');

function readFile(path, isSetError){
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function(err, data){
            if(err || isSetError){
                reject('承诺石沉大海~~~~~');
            }

            const resData = JSON.parse(data);

            resolve(resData);
        });
    });
}

Promise.race([
    readFile('./data/user.json', true),
    readFile('./data/userClass.json'),
    readFile('./data/class.json')
])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
}); 