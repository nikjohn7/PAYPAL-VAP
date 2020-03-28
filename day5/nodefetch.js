const fetch = require("node-fetch");

const url="https://api.github.com/orgs/paypal";

const getter=fetch(url);

function geturl(url){
    console.log("URL: "+url);
    
    const promise=new Promise((resolve, reject)=>{
        fs.readFile(filename, type, (err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
    return promise;
//homework
//create a screen which lets u create courses, students, allowing students to subscribe courses