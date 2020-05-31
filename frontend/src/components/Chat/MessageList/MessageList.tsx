import React, { useLayoutEffect, useRef } from 'react';
import classnames from 'classnames';
import classes from './MessageList.module.scss';
import { MessageType } from '../../../pages/Chat';
import { Message } from '../Message';

type Props = {
  messages: MessageType[];
  className?: string;
};

const MessageList = ({ messages, className }: Props) => {
  const messageList = useRef<HTMLDivElement>();
  const lastMessageLength = useRef(0);

  // if a message was attached scroll to the end of the messageList
  useLayoutEffect(() => {
    const hasMessageBeenAttached = messages.length > lastMessageLength.current;
    if (hasMessageBeenAttached) {
      lastMessageLength.current = messages.length;
      messageList.current.scrollTop = messageList.current.scrollHeight;
    }
  });

  return (
    <div
      ref={(ref: HTMLDivElement) => (messageList.current = ref)}
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
