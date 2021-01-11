const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file

router.get('/aboutus' ,(request, response) =>{
    // response.send("who will win the battle?");
        response.render('aboutus')
        
})

module.exports = router;