import React from 'react';
import classnames from 'classnames';
import classes from './Message.module.scss';
import Linkify from 'react-linkify';
import { MessageType } from '../../../pages/Chat';
import { ClockFormat } from '../../../pages/Settings/Settings.types';
import useSettings from '../../../hooks/useSettings';
import useUser from '../../../hooks/useUser';
import { getAllYoutubeIds } from './parser';

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

  const youtubeIds = getAllYoutubeIds(message.text);

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
        {youtubeIds &&
          youtubeIds.map((id: string) => (
            <div className={classes.videoWrapper} key={id}>
              <div className={classes.video}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${id}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export { Message };
