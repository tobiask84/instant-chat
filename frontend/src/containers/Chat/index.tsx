import React, { useMemo } from 'react';
import classes from './Chat.module.scss';
import MessageInput from '../../components/Chat/MessageInput';
import MessageList from 'components/Chat/MessageList';
import useMessages from '../../hooks/useMessage';
import { getMyUuid, getSettings } from '../../service/localStorageService';
import { SettingsType } from '../Settings/Settings.types';

const Chat = () => {
  const [messages, sendMessage] = useMessages();
  const settings = useMemo<SettingsType>(getSettings, []);

  const sendHandler = (text: string) => {
    sendMessage(getMyUuid(), settings.name, text);
  };

  return (
    <div className={classes.root}>
      <MessageList messages={messages} />
      <MessageInput className={classes.input} onSend={sendHandler} />
    </div>
  );
};

export default Chat;
