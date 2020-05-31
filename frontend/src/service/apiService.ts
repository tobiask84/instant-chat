import io from 'socket.io-client';
import { MessageType } from '../containers/Chat/Chat.types';

const envUrl = process.env.INSTANT_CHAT_BACKEND_URL;
const hasEnvUrl = !!envUrl;
const url = hasEnvUrl ? `//${envUrl}:3000` : 'http://localhost:3000';

const socket = io(url);

export const sendMessage = (message: MessageType) => {
  socket.emit('chat message', message);
};

export const onReceiveMessage = (callback: (message: MessageType) => void) => {
  socket.on('chat message', (message: MessageType) => {
    callback(message);
  });
};
