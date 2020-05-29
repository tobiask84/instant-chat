import io from 'socket.io-client';
import { MessageType } from '../containers/Chat/Chat.types';

const socket = io('http://localhost:3000');

export const sendMessage = (message: MessageType) => {
  socket.emit('chat message', message);
};

export const onReceiveMessage = (callback: (message: MessageType) => void) => {
  socket.on('chat message', (message: MessageType) => {
    callback(message);
  });
};
