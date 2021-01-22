const express = require('express');
const app = express();
var cookieSession = require('cookie-session');


app.use(cookieSession({
    name:'session',
    keys:['its a secret that is in here!'],
    maxAge: 14 * 24 * 60 * 60 * 1000 // = 24 hours
}))


app.use(express.urlencoded({extended:false}));
app.use(express.json)

app.set('view engine', 'ejs');

let authLogin = (req,res, next) =>{
    //this is going to check the session for the username
    if(req.session.username){
        next()
    }
    else{
        res.redirect('/')
    }
}

app.all('/admin/*',authLogin, (req, res, next) =>{
    next()
} )
app.get('/',(req,res) =>{

    res.send('home page')
})  

app.get('/admin/dashboard', authLogin ,(req,res) =>{
    res.send('dashboard')
})

//scraping infomration form the header and we should look the info up in the database but for right now we are just going to use an arary

app.get('/login', (req, res) => {
    res.render('login')
})
let users = [
    {username:'Matt' , password: '1234'},
    {username:'Kanny' , password: '5678'},
    {username:'Ally' , password: '2345'},
    {username:'Andrea' , password: '7880'},

]
//we are going to serarch our made-up daatabse and try and find if the user and passowrd match



app.post('/login', (req, res) =>{
    //going to get the username and passwrod from the user.
    let userID = req.body.userID
    let password = req.body.password;

    let user = users.find(userRecord =>{
        return userRecord.userName === userID && userRecord.password === password;
    })
    if(user != null){
        //set session information 

        if(req.session){
            req.session.username = userID;
            res.redirect('/')
        }
}    
        else{
            res.redirect('/login')
        }

})


app.listen(3000, () => {
    console.log('listening on 3k');
    
})