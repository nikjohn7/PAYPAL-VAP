var express=require('express');
var app=express();

app.set('view engine','pug');
// //create views folder
// //create file page.pug
app.set('views','./views');

app.get('/index',function(req,res){
    res.render('page');
    // res.send('hel');
});

app.listen(5000, function(){
    console.log('Server running');
})