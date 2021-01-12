const express = require('express');
const app = express('');
const socket = require("socket.io");
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
        res.render("index")
})

let server = app.listen(4000, () => {
    console.log('4000 port');
})
let io = socket(server);
// only difference is making sure the server get a variable so that it can be passed. Also Using the socket constant, we passed the server varaible to it and initialized it to another variable.
//when a connection is created this even listener is what executes.
io.on('connection', (socket) =>{
    //the message that will be sent out to eeach connected client. The emtit function that to happen
    //when the message is actually received this is what executes
    socket.emit('chatMessage', {msg:"Hello from our backend"})
    socket.on('msgFromClient' , (msgClient) =>{
        //the term below for what is happening is called 'broadcasting to call clients'
        io.emit('msgFromServer', msgClient )
        //logic required to reciev meesage tfrom the server
        //find ul tag
        //insert broadcast message
    })
})
