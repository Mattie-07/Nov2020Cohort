const express = require('express');
const app = express();
var cookieSession = require('cookie-session');


app.use(cookieSession({
    name:'session',
    keys:['its a secret that is in here!'],
    maxAge: 14 * 24 * 60 * 60 * 1000 // = 24 hours
}))


app.get('/', (req, res) => {
    req.session.lname ="Roberts"
    req.session.fname = "Matthew";
    res.send('home page');   
})

app.get('/about', (req, res) =>{

    res.send(req.session.fname + req.session.lname);
})
app.listen(3000, () =>{
    console.log("Listening on 3000.");

})