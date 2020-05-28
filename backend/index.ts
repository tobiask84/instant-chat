const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.send('<h1>Chat Server is running. Websocket is open.</h1>');
});

io.on('connection', (socket: any) => {
    socket.on('chat message', (message: { userId: string, userName: string, text: string }) => {
        const timestamp = Date.now();
        io.emit('chat message', { ...message, timestamp, id: `${message.userId}-${timestamp}` });
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
