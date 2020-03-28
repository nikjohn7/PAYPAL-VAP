// function hello(name){
//     console.log('Hello',name);
// }
// hello('John');

  var fs=require('fs');//like import in java

// fs.readFile("f1.txt", function(err,data){
//     fs.readFile("f2.txt", function(err,data1){
//         console.log(data1.toString());
//         console.log(data.toString());
//     });
// });
//console.log("File 1 read")
// var f1=''
// var f2=''

// function hello(name){
//     console.log("Hello",name);
// }

// module.exports=hello;


fs.readFile('f1.txt','utf8',function(err,contents){
    console.log(contents);
});