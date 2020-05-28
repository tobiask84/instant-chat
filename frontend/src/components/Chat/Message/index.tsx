import React from 'react';
import classnames from 'classnames';
import classes from './Message.module.scss';
import { MessageType } from '../../../containers/Chat/Chat.types';
import {getMyUuid} from "../../../service/localStorageService";

type Props = {
  message: MessageType;
  className?: string;
};

const Message = ({ message, className }: Props) => {
  const isMyMessage = message.userId === getMyUuid();

  const getTime = () => {
    const date = new Date(message.timestamp);
    return date.toLocaleString('en', { hour: 'numeric', minute: 'numeric' });
  };

  return (
    <div
      className={classnames(
        classes.root,
        { [classes.myMessage]: isMyMessage },
        className,
      )}
    >
      <div className={classes.header}>
        {!isMyMessage && <span className={classes.user}>{message.user}</span>}
        <span className={classes.date}>{getTime()}</span>
      </div>
      <div className={classes.bubble}>{message.text}</div>
    </div>
  );
};

export default Message;
