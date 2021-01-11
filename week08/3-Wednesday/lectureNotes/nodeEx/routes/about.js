const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/about' ,(request, response) =>{
    response.send(`

    <h1>This is my about page!</h1>
        
        `)
})


module.exports = router;