const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get('/contacts?/:name' ,(request, response) =>{
    let userName = (request.params.name)

    response.send(`<p>Hi ${userName} Welcome to my page!</p>`)
})


module.exports = router;