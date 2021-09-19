const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

io.on('connection', socket => {
    console.log("connected");
    socket.on('message', ({ message }) => {
        console.log("New message has been received: \"" + message.text + "\"")
        io.emit('message', {message})
    })
})

http.listen(4000, function() {
    console.log('listening on port 4000')
})