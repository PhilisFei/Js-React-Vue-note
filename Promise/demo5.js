const fetch = require('node-fetch');


function getData(){
    /*
    return new Promise((resolve, reject) => {
        fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
    */
   return fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        return err;
    });
}

/*
getData().then((res) => {
    console.log(res);
});
*/

async function logData(){
    const p1 = await getData1();
    const p2 = await getData2();
    const p3 = await getData3();
    const p4 = await getData4();
    const p5 = await getData5();
}

logData();