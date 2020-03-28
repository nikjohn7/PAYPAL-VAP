const http=require("http");
const fs=require('fs');

// var eventEmitter=new EventSource.EventEmitter();


// car server=http.createServer(function(req,res){
//     res.end();
// });
// console.log("Server running")
// server.listen(8000)

// create a server object:
http.createServer(function (req, res) {
  fs.readFile('airportdeets.csv',function(err,data){
    a=data,toString.split('\n')

  })
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

