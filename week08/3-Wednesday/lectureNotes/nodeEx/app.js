//express will make things more simple and give us more functionality
// in order to use external modules I need to use npm install express
// or us any other name needed for the third party module
// in order for us to send and recieve requests from a client, we would need to build a server .
//

//clients => request  => somethingHappens => response
//clients => request  => express => response => client
// in express each 'get' is going to have its own location. ALot like the other page we created where 
// we used a swtich statement to find the difference between the addresses 
const express = require ("express");
const app = express()
//subroutes
app.use(require('./routes/index'))
app.use(require('./routes/batman'))
app.use(require('./routes/dogs'))
app.use(require('./routes/about'))
app.use(require('./routes/cats'))
app.use(require('./routes/contacts'))
app.use(require('./routes/calc'))
app.use(require('./routes/flights'))
app.use(require('./routes/birthyear'))


// app.use(require(`./routes/cats?`))
// the first agrumet in the get method is the home page, the 2nd and  3rd argument are the request and //response objects
//we are telling epxress we hve a folder named public that is on the top level
//we dont have to tell express that the folder is public anymore because its already understood at this point.
app.use(express.static('public'))
//create a seperate file for each route 


app.listen(3001, () => {
    console.log("Running on port 3001");
})


// the question mark means the character or characters before it are option in order fot the query to work. 
    //means it can be batman
    //batwoman
    //or batwowowowoman 
    // the asteriscks means it can take the specified characters zero or more times.
// })
// app.get('/contact' , (req, res) => {
    
//     let userName = req.param("name")
//     res.send(`<h1> Hello there ${userName}</h1>`)
//     console.log(userName);
// })
// app.get('/contact/:name' , (req, res) => {
//     let userName = req.params.name
//     console.log(userName);
//     res.send(`<h1> Hello there ${userName}</h1>`)
// })
// // Two things must match when using the get method. The route and the callback which has the request and the response object. 

// let data = {data: [{
//     id: 0,
//     name: "Golden Retriever",
//     img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
// },
// {
//     id: 1,
//     name: "Lab",
//     img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
// },
// {
//     id: 2,
//     name: "pug",
//     img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
// },
// {
//     id: 3,
//     name: "poodle",
//     img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
// }
// ]}


// app.get('/api', (req, res) =>{
//     //content-type application/json
//     res.json(data)
// })

// app.get('/dogs/:id', (req, res) =>{

//     let id = req.params.id;
//     //data.data[id].name , data.data[id]img

//     res.send(`
    
//     <h1>${data.data[id].name}</h1>

//     <ul>
//         <li> <a href ="/dogs/0">${data.data[0].name}</a> </li>
//         <li> <a href ="/dogs/0">${data.data[1].name}</a> </li>
//         <li> <a href ="/dogs/0">${data.data[2].name}</a> </li>
//         <li> <a href ="/dogs/0">${data.data[3].name}</a> </li>

//     </ul>


//     <img height ="300px" src ="${data.data[id].img}">
    
// `)
// })

//calculate 4/5 
// app.get("/addition/:num1/:num2" , (req, res) =>{
//     let num1 = req.params.num1;
//     let num2 = req.params.num2;
//     let sum = parseInt(num1) + parseInt(num2);
//     res.send(`Adding ${req.params.num1} ${req.params.num2} equals ${sum}`)
// })
// app.get("/flights?/:from/:to", (request, res) =>{
//     res.send(`Departing from ${request.params.from} Arriving at: ${request.params.to}`)
// })


