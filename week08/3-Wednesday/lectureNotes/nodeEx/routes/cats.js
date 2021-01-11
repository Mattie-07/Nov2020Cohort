const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/cats' ,(request, response) =>{
    response.send('<h1>Cats make me sneeze. Meow</h1>')
})

module.exports = router;
