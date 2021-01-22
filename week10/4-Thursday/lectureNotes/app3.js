const express = require('express');
const app = express();
const helmet = require('helmet');


let urlencoded = function(val){
    return function(req, res, next){
        next()
    }
}
// app.use(urlencoded({extended:false})
app.use(express.static('public'));

app.use(function(req,res,next){next()});
app.use(helmet());

app.all('/' ,(req, res, next) =>{
    console.log('log some data');
    next();
});
//custom middleware 
let authLogin = (req,res,next)=>{
    console.log(`we're checking authentication`);
    next()
}

app.get('/', authLogin, (req,res,next ) =>{
    if (true){
        res.send('home')
    }
    else{
        next(new Error("there was an error"))
    }
})

app.post('/', (req, res) =>{
    res.send('post')
})




app.put('/', (req, res) =>{
    res.send('put')
})
app.get('/about', (req, res) =>{
    res.send('about')
})


app.use(function(err, req, res, next) {
    console.log('here is an error');
    console.log(err.message);
})

app.listen("4000" ,() =>{
console.log('listening on 4k')
});