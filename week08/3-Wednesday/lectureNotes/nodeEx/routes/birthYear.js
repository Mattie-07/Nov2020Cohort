const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/birthyear/:age' ,(request, response) =>{
    let num = request.params.age;

    yourAge =    2021 - parseInt(num);
    response.send(`Your age is ${yourAge}`)


})

module.exports = router;
