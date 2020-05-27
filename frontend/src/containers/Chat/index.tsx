import React from 'react';
import classes from './Chat.module.scss';
import MessageInput from '../../components/Chat/MessageInput';
import MessageList from 'components/Chat/MessageList';
import { MessageType } from './Chat.types';

const mockMessages = new Array(15).fill(1).map((el, i) => {
  return {
    id: i,
    user: 'User',
    timestamp: Date.now(),
    text: 'Message text',
  } as MessageType;
});

const Chat = () => {
  const onSend = (message: string) => {
    console.log(message);
  };

  return (
    <div className={classes.root}>
      <MessageList messages={mockMessages} />
      <MessageInput className={classes.input} onSend={onSend} />
    </div>
  );
};

export default Chat;
