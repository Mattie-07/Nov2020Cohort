const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/dogs?' ,(request, response) =>{
    response.send(`
        <link rel = "stylesheet" style="css/global.css">
        <h1> Woof !</h1>
        `)
})


module.exports = router;