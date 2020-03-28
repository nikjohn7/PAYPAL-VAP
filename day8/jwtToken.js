var jwt = require('jsonwebtoken');

JWT_SECRET='shhhhh'
var token=jwt.sign(
    {username:'admin', password:'pwd123'},
    JWT_SECRET,
    {expiresIn:'24h'},
    // (err,token)=>{
    //     console.log(token);
    // }
);

jwt.verify(token, JWT_SECRET, function(err, decoded) {
    if(err){
        console.log(err);
    }
    console.log(decoded.username);
    console.log(decoded.password)
  });