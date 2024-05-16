var WebSocket = require('ws')
var ws = new WebSocket.Server({ port: 8080 }, () => {
    console.log("Server Started!")
})

ws.on('listening', () => {
    console.log("Server is listening on port 8080");
})

ws.on('connection', (ws) => {
    ws.on('message', (data) => {
        console.log("Data recieved: " + data);
        ws.send("Hola!");
    })
})