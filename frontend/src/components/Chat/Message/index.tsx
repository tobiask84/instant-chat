import React, { useMemo } from 'react';
import classnames from 'classnames';
import classes from './Message.module.scss';
import { MessageType } from '../../../containers/Chat/Chat.types';
import { getMyUuid, getSettings } from '../../../service/localStorageService';
import {
  ClockFormat,
  SettingsType,
} from '../../../containers/Settings/Settings.types';

type Props = {
  message: MessageType;
  className?: string;
};

const Message = ({ message, className }: Props) => {
  const isMyMessage = message.userId === getMyUuid();
  const settings = useMemo<SettingsType>(getSettings, []);

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
      <div className={classes.bubble}>{message.text}</div>
    </div>
  );
};

export default Message;
