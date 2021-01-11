const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/' ,(request, response) =>{
    response.send(`

    <link rel="stylesheet" href="css/global.css">
    <p>Living together</p>
        
        `)
})


module.exports = router;