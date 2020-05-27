import React from 'react';
import classes from './Chat.module.scss';
import MessageInput from './components/MessageInput';

const Chat = () => {
  const onSend = (message: string) => {
    console.log(message);
  };

  return (
    <div className={classes.root}>
      <div className={classes.messages} />
      <MessageInput className={classes.input} onSend={onSend} />
    </div>
  );
};

export default Chat;
