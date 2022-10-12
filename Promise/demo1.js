const fs = require('fs');

let uid = 1;

fs.readFile('./data/user.json', 'utf8', function(err, data){
    const userData = JSON.parse(data),
          userInfo = userData.filter(item => item.id === uid)[0];

    fs.readFile('./data/userClass.json', 'utf8', function(err, data){
        const userClassData = JSON.parse(data),
              userId = userInfo.id,
              userClass = userClassData.filter(item => item.id === userId)[0];

              fs.readFile('./data/class.json', 'utf8', function(err, data){
                const classData = JSON.parse(data),
                      userClasses = userClass.classes;

                let _arr = [];
                userClasses.map(classItem => {
                    classData.map(item => {
                        if(item.id === classItem.id){
                            _arr.push(item);
                        }
                    });
                });

                const userClassInfo = {
                    username: userInfo.name,
                    classes: _arr
                }

                fs.writeFileSync(`./data/${userInfo.name}.json`, JSON.stringify(userClassInfo));
              });
    });
});