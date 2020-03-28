var express = require('express')
var app=express();
app.use( express.json() );//to support json extended bodies

app.use(function(req,res,next){
    console.log('In middleware')
    next();
    console.log('Exiting middleware')
})

var id;
var name;
var address;
var username;
var password;

app.post('/vap', function(req,res){
    id=req.body.id;
    name=req.body.name;
    address=req.body.address;
    username=req.body.username;
    password=req.body.password;

     res.send(id+" "+name+" "+address+" "+username+" "+password)
})

app.get('/get', function(req,res){//add header, query on postman, see output
    //console.log(req.headers['username'])
    //console.log(req.query['session'])
    if(req.query['username']==='Nikjo' && req.query['password']==='abc123'){
        res.send('Welcome '+ username)
    }
    
})

app.listen(3100);