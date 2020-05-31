import React from 'react';
import classes from './Chat.module.scss';
import MessageInput from '../../components/Chat/MessageInput';
import MessageList from '../../components/Chat/MessageList';
import useMessages from '../../hooks/useMessage';
import useUser from '../../hooks/useUser';

const Chat = () => {
  const [messages, sendMessage] = useMessages();
  const [user] = useUser();

  const sendHandler = (text: string) => {
    sendMessage(user.id, user.name, text);
  };

  return (
    <div className={classes.root}>
      <MessageList messages={messages} />
      <MessageInput className={classes.input} onSend={sendHandler} />
    </div>
  );
};

export default Chat;
