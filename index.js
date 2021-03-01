const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://192.168.0.113:4000",
    },
});
const chatServer = require('./socket');

app.get('/', (req, res) => {
    res.send('The server is up and running!');
});

chatServer.startChatServer(io);
server.listen(8080, () => {
    console.log('Listening on *:8080');
  });