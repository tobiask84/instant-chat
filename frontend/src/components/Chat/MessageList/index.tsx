import React from 'react';
import classnames from 'classnames';
import classes from './MessageList.module.scss';
import { MessageType } from '../../../containers/Chat/Chat.types';
import { Message } from '../Message';

type Props = {
  messages: MessageType[];
  className?: string;
};

const MessageList = ({ messages, className }: Props) => {
  return (
    <div
      data-testid="message-list"
      className={classnames(classes.root, className)}
    >
      {messages.map((message) => (
        <Message
          className={classes.message}
          message={message}
          key={message.id}
        />
      ))}
    </div>
  );
};

export default MessageList;
