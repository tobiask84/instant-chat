import React from 'react';
import classnames from 'classnames';
import classes from './Message.module.scss';
import Linkify from 'react-linkify';
import { MessageType } from '../../../pages/Chat';
import { ClockFormat } from '../../../pages/Settings/Settings.types';
import useSettings from '../../../hooks/useSettings';
import useUser from '../../../hooks/useUser';

type Props = {
  message: MessageType;
  className?: string;
};

const Message = ({ message, className }: Props) => {
  const [settings] = useSettings();
  const [user] = useUser();
  const isMyMessage = message.userId === user.id;

  const getTime = () => {
    const date = new Date(message.timestamp);
    return date.toLocaleString('de', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: settings.clockFormat === ClockFormat.am,
    });
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
        {!isMyMessage && (
          <span className={classes.user}>{message.userName}</span>
        )}
        <span className={classes.date}>{getTime()}</span>
      </div>
      <div className={classes.bubble}>
        <Linkify>{message.text}</Linkify>
      </div>
    </div>
  );
};

export { Message };
