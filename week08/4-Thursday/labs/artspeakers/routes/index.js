const express = require('express');
const router = express.Router();
let dataFile = require("../data/data.json");

router.get("/", (req,res)  => {
    let pageSpeakers = dataFile.speakers;
    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)

    })

    
    console.log(pagePhotos);


    //this allows the index (or the speakers page) to communicate with index.ejs
    res.render("index", {
            photos:pagePhotos
    })
})

module.exports = router;