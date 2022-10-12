const fs = require("fs");

let uid = 2;

function readFile(path, prevData) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', function(err, data){
            if(err){
                reject(err);
            }

            const resData = JSON.parse(data);

            resolve({
                prevData, 
                resData
            });
        });
    });
}

readFile('./data/user.json')
    .then((res)=>{
        const { resData } = res,
              userInfo = resData.filter(item => item.id === uid)[0];

        return readFile('./data/userClass.json', userInfo);
    })
    .then((res) => {
        const { prevData, resData } = res,
              userId = prevData.id,
              userClass = resData.filter(item => item.id === userId)[0];

        return readFile('./data/class.json', {
            username: prevData.name,
            userClass
        });
    })
    .then((res) => {
        const { prevData, resData } = res,
              userClasses = prevData.userClass.classes;

        let _arr = [];
        userClasses.map(classItem => {
            resData.map(item => {
                if(item.id === classItem.id){
                    _arr.push(item);
                }
            });
        });

        const userClassInfo = {
            username: prevData.username,
            classes: _arr
        };

        fs.writeFileSync(`./data/${userClassInfo.username}.json`, JSON.stringify(userClassInfo));
    })
    .catch((err) => {
        console.log(err);
    });