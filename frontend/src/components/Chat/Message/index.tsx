import React from 'react';
import classnames from 'classnames';
import classes from './Message.module.scss';
import { MessageType } from '../../../containers/Chat/Chat.types';

type Props = {
  message: MessageType;
  className?: string;
};

const Message = ({ message, className }: Props) => {
  const isMyMessage = message.id % 2 === 0;

  const getTime = () => {
    const date = new Date(message.timestamp);

    return `${date.getHours()}:${date.getMinutes()}`;
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
