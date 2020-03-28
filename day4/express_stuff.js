var express = require('express')
var app=express();
app.use( express.json() );//to support json extended bodies

app.use(function(req,res,next){
    console.log('In middleware')
    next();
    console.log('Exiting middleware')
})
app.get('/', function(req,res){//add header, query on postman, see output
    console.log(req.headers['username'])
    console.log(req.query['session'])
    res.send('home')
})
app.get('/user/:id', function(req,res){
    console.log(req.params)
    res.send('Hello '+req.params.id)
    console.log(req.body)
    console.log(req.body.id)
    console.log(req.body.name)
})
app.get('/about', function(req,res){
    res.send('About')
})
app.get('/check', function(req,res){
    res.send('test123')
})

app.listen(3100);

//use postman