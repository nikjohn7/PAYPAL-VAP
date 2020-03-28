//const fs=require('fs');
// const util=require('util')
// const readFile=util.promisify(fs.readFile);

// const promise = readFile('test.json','utf-8')

// promise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('done'));

//Basic promises above

// fs.readFile('airportdeets.csv','utf-8');


//custom function
// function readFile(filename, type){
//     const promise=new Promise((resolve, reject)=>{
//         fs.readFile(filename, type, (err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             resolve(data);
//         })
//     })
//     return promise;
// }

// const promise = readFile('test.json','utf-8')

// function delay(sec){//creating a custom delay function todelay the out from promise
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve(sec)}, sec*1000);
//     })
//     return promise;
// }
// promise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('done'));
//delay(1).then((s)=>console.log(`delayed for ${s}s`));



//Multiple promises
const fs=require('fs');
const util=require('util')
const readFile=util.promisify(fs.readFile);

// let promises=Promise.all([
//     readFile('test.json','utf-8'),
//     readFile('f1.json','utf-8'),
//     readFile('f2.json','utf-8')
// ]);

// promises
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('done'));




function getFileList(filename, encodingType) {
    let promise = new Promise((resolve, reject) => {
      fs.readFile(filename, encodingType, (err, data) => {
        if (err) return reject(new Error(err));
        data = JSON.parse(data);
  
        let promiseArr = []
        for (let i = 0; i < data.length; i++)
          promiseArr.push(readFile(data[i], 'utf-8'))
  
        resolve(promiseArr);
      });
    });
    return promise;
  }
  
  getFileList("./filelist.json", 'utf-8')
    .then((promiseList) => {
      var promiseAll = Promise.all(promiseList);
      promiseAll
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    })