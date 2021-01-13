const express = require('express');
const router = express.Router();
let dataFile = require("../data/data.json");

router.get("/", (req,res)  => {
    let pageSpeakers = dataFile.speakers;
    let artwork = [];
    pageSpeakers.forEach(speakerObj =>{
        artwork = artwork.concat(speakerObj.artwork)

    })

    
    console.log(artwork);


    //this allows the index (or the speakers page) to communicate with index.ejs
    res.render("index", {
            artwork:artwork,
            pageTitle:"Roux Meetups",
            pageID: 'home'
    })
})

module.exports = router;