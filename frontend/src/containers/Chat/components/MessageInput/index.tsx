import React, { ChangeEvent, useState } from 'react';
import classnames from 'classnames';
import classes from './MessageInput.module.scss';

type Props = {
  className?: string;
  onSend: (message: string) => void;
};

const MessageInput = ({ className, onSend }: Props) => {
  const [message, setMessage] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    onSend(message);
  };

  return (
    <div className={classnames(classes.root, className)}>
      <input type="text" onChange={handleChange} className={classes.input} />
      <button type="submit" className={classes.sendButton} onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
