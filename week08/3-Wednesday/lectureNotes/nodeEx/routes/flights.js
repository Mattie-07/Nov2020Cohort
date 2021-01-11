const express = require("express");
const router = express.Router()
//Router allows us to route the information in the index.js file to the apps.js file



router.get("/flights?/:from/:to", (request, res) =>{
        res.send(`Departing from ${request.params.from} Arriving at: ${request.params.to}`)
        })
        
module.exports = router;