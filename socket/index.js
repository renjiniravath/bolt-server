function startChatServer(io) {

    io.on('connection', socket => {
        socket.on('broadcast', (message) => {
            io.emit('broadcast-relay', message)
        })
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}

exports.startChatServer = startChatServer;