import React from 'react';
import classes from './Chat.module.scss';
import MessageInput from '../../components/Chat/MessageInput';
import MessageList from 'components/Chat/MessageList';
import useMessages from '../../hooks/useMessage';

const Chat = () => {
  const [messages, sendMessage] = useMessages();
  const mockMessages = messages.map((m: string, i: number) => ({
    id: i,
    user: 'User',
    timestamp: Date.now(),
    text: m,
  }));

  return (
    <div className={classes.root}>
      <MessageList messages={mockMessages} />
      <MessageInput className={classes.input} onSend={sendMessage} />
    </div>
  );
};

export default Chat;
