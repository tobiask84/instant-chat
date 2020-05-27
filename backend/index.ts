const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket: any) => {
    socket.on('chat message', (msg: string) => {
        io.emit('chat message', msg);
    });
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
