const express = require("express");
const app = express();
//ejs
app.set("view engine", 'ejs');

const io = require('socket.io');
//public
app.use(express.static("public"));


//subroutes
app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'))
app.use(require('./routes/chat'))

app.listen(3000, () =>{
    console.log(`Listening on port 3000`);
})


// io.attach(server);
let io = socket(server);
io.on('connection' , (socket) =>{
    console.log('You are connected');
    //listening for messages
    socket.on('postMessage', (msg)=>{
        //broadcasting to all clients
        io.emit('updateMessages', msg)
})
socket.on("updateMessages", (data) =>{
    //grab the container to display the messages 
    let chatDisplay = document.querySelector('.chat-display');
    let newMessage = document.createElement('p');

    if(chatUsername.value === data.username){
        newMessage.className = "bg-success chat-text"
    }
    else{
        newMessage.className = 'bg-info text-warning chat-text'

    //<p> class = ''> username message </p>
    newMessage.innerHTML = `<strong> ${data.username}</strong>:${data.message} `;

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
    }
})
})
