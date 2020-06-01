import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
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

  const scrollToBottom = useCallback(
    (force = false) => {
      const isNeedToScroll =
        messages.length > lastMessageLength.current || force;
      if (isNeedToScroll) {
        lastMessageLength.current = messages.length;
        messageList.current.scrollTop = messageList.current.scrollHeight;
      }
    },
    [messages.length],
  );

  // if a message was attached scroll to the end of the messageList
  useLayoutEffect(scrollToBottom);

  useEffect(() => {
    // if for example the keyboard opens or the window gets smaller
    // then the message list height changes and we want to scroll back down
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', scrollToBottom);
      window.visualViewport.addEventListener('resize', () =>
        window.setTimeout(() => scrollToBottom(true), 100),
      );
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', scrollToBottom);
      }
    };
  }, [scrollToBottom]);

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
