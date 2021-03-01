const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://192.168.0.113:4000",
    },
});
const chatServer = require('./socket');

app.get('/', (req, res) => {
    res.send(`The server is up and running in ${process.env.MODE}!`);
});

chatServer.startChatServer(io);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

server.listen(port);