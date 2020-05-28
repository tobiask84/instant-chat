import * as https from "https";
const fs = require('fs')
const app = require('express')();
const http = require('http');

const privateKeyPath = process.env.INSTANT_CHAT_PRIVATE_KEY;
const fullChainPath = process.env.INSTANT_CHAT_FULL_CHAIN;

const isTls = privateKeyPath && fullChainPath;
const protocol = isTls ? https : http
const server = protocol.createServer({
        key: isTls ? fs.readFileSync(privateKeyPath) : undefined,
        cert: isTls ? fs.readFileSync(fullChainPath): undefined
    }, app).listen(3000);

const io = require('socket.io')(server);

app.get('/', (req: any, res: any) => {
    res.send('<h1>Chat Server is running. Websocket is open.</h1>');
});

io.on('connection', (socket: any) => {
    socket.on('chat message', (message: { userId: string, userName: string, text: string }) => {
        const timestamp = Date.now();
        io.emit('chat message', { ...message, timestamp, id: `${message.userId}-${timestamp}` });
    });
});

