
const express = require('express');
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(require('./routes/authentication'));



app.listen(3001, ()=> {
    console.log("Listening on Port 3001");
})





// const jwt = require('jwt-simple');// creat a jwt token 

// //user information that is going to represent the kind of information that we want to store.

// let userInfo = {
//     id:'12345', 
//     userName: "Matthew",
//     email: "Matthew@Matthew.com",
// }

//we created our object and nowe we are going to create a function that returns a jwt token

// const token = (user) => {

//     let timestamp = new Date().getTime();
//     return jwt.encode({sub:user.id, name:user.userName, iat:timestamp},"songiousnsuoignagn")// encode creates a token and what gets passed into it is a paylod and an objet
// }

// cal function and pass  the user to the function

// let jwtToken= token(userInfo);
// console.log(jwtToken)