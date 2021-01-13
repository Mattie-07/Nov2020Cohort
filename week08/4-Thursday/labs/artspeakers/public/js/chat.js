const socket  = io();
let chatUsername = document.querySelector("#chat-username");
let chatMessage = document.querySelector("#chat-message");

socket.on('connection', () =>{
    let chatForm = document.querySelector('form')
    chatForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        //broadcast back to all other cleints attached to the server
        socket.emit('postMessage', {
            username:chatUsername.value,
            message: chatMessage.value
        })
        chatMessage.value = '';
        chatMessage.focus();
    })
})