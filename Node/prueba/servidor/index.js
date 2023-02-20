const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

var userConnected = 0;

// Esto es para que el servidor pueda servir archivos estáticos (busca en la carpeta public)
app.use(express.static('public'))


// Evento de conexión y desconexión
io.on('connection', (socket) => {
    socket.nombre = ""
    userConnected++;
    console.log(`Conectado --> Total: ${userConnected}\n`);

    socket.on('mensaje', (msg) => {
        socket.nombre = msg;
    });

    socket.on('disconnect', () => {
        userConnected--;
        console.log(`${socket.nombre} desconectado --> Total: ${userConnected}\n`);
    });
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// npm install -g --save-dev nodemon
// Ejecutar el servidor con nodemon desde fuera de la carpeta servidor (carpeta padre)