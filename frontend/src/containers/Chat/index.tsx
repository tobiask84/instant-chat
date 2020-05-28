import React from 'react';
import classes from './Chat.module.scss';
import MessageInput from '../../components/Chat/MessageInput';
import MessageList from 'components/Chat/MessageList';
import useMessages from '../../hooks/useMessage';
import {getMyUuid} from "../../service/localStorageService";

const Chat = () => {
  const [messages, sendMessage] = useMessages();

  const sendHandler = (text: string) => {
    sendMessage(getMyUuid(), text)
  }

  const mockMessages = messages.map((m: {userId: string, text: string}, i: number) => ({
    id: 1,
    userId: m.userId,
    user: 'User',
    timestamp: Date.now(),
    text: m.text,
  }));

  return (
    <div className={classes.root}>
      <MessageList messages={mockMessages} />
      <MessageInput className={classes.input} onSend={sendHandler} />
    </div>
  );
};

export default Chat;
