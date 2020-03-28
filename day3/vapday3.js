// var format=require('string-format')
// var msg=format('"{firstName} {lastName}" <{email}>',{
//     firstName:'Nikhil',
//     lastName:'John',
//     email:'nickjohn@gmail.com'
// })
// console.log(msg)


// var colors = require('colors');
 
// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// var _=require('lodash');
// a=[1,2,3,4]
// b=[4,5,6,7,8]
// d=_.union(a,b)
// console.log(d)

// var myArr =  [{ name: "john", age:23 },
//               { name: "john", age:43 },
//               { name: "jimi", age:10 },
//               { name: "bobi", age:67 }];

// console.log(_.filter(myArr, {name: 'john'}))


// function greet(name){
//     var msg='Hello'+name
//     return function(){
//         console.log(msg)
//     }
// }
// var printmsg=greet('Nick')
// printmsg()


// function init(config){
//     return {
//         print : function(data){
//             console.log(config+" - "+data)
//         }
//     }
// }
// var app=init("*")
// app.print("Mark")


// var events=require("events");
// var eventsEmitter=new events.EventEmitter();

// eventsEmitter.on('read',function(file){
//     console.log('read event-l1 '+file)
// });

// eventsEmitter.on('read',function(file){
//     console.log('read event-l2 '+file)
// });

// eventsEmitter.on('connect',function(file){
//     console.log('connect event - '+file)
// });
// eventsEmitter.emit('read','dev.txt');
// eventsEmitter.emit('connect','server connected')


var fs=require('fs')
var data=''

var readStream=fs.createReadStream('airportdeets.csv','utf8')
var i=1

readStream.on('end',function() {
    console.log('completed');
});

readStream.on('data',function(chunk){
    data+=chunk;
    console.log('chunk : '+i);
    i++;
});
