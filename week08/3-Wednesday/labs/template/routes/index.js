const express = require("express");
const axios = require("axios");
const router = express.Router()

//Router allows us to route the information in the index.js file to the apps.js file

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]
let nameArr = [
    "Woody",
    "RJ",
    "Micah",
    "Jeremy",
    "Chris",
    "Dan",
    "Cainan",
    "Michael"
]
let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]

let obj = {
    firstName : "Matthew",
    lastName : "Roberts"
}

// router.get('/index' ,(request, response) =>{
//     // response.send("who will win the battle?");
//     //res.render(veiw, obj) The objec has key value pairs
//         // response.render('index', {
//         //     firstName: "Matthew",
//         //     lastName: "Roberts"
//         // })
//     // response.render('index', {
//     //     pic1: pictures[0],
//     //     pic2: pictures[1],
//     //     pic3: pictures[2], 
//     //     city1: cities[0],
//     //     city2: cities[1],
//     //     city3: cities[2],
//     //     city4: cities[3],
//     // })
//     response.render('index', {
//         pic: pictures // a key name sending an array of pictures
//     })



// })
// router.get('/:id', (req,res) => {
//     let id = req.params.id;
//     res.render("index", {
//         pic: pictures[id]
//         city: cities[id]
//     })
    
// })

router.get('/index', async (req,res) => {
    let num = 0;
    let data = await axios.get('https://corona.lmao.ninja/v2/states')
    res.render("index", {
        names: nameArr,
        obj: obj,
        data:data.data,
        num:num
    })

        


    
})

module.exports = router;