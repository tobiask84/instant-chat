import React, { ChangeEvent, useState } from 'react';
import classnames from 'classnames';
import classes from './MessageInput.module.scss';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';

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
    if (!message) {
      return;
    }

    onSend(message);
    setMessage('');
  };

  return (
    <div className={classnames(classes.root, className)}>
      <Input
        value={message}
        onChange={handleChange}
        className={classes.input}
      />
      <Button color="accent" onClick={handleSend} disabled={!message}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
