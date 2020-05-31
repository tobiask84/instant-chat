import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import classnames from 'classnames';
import classes from './MessageInput.module.scss';
import Input from '../../../components/UI/Input';
import Button from '../../../components/UI/Button';
import { SendOption } from '../../../pages/Settings/Settings.types';
import useSettings from '../../../hooks/useSettings';

type Props = {
  onSend: (message: string) => void;
  className?: string;
};

const MessageInput = ({ onSend, className }: Props) => {
  const [message, setMessage] = useState<string>('');
  const [settings] = useSettings();

  const inputRef = React.createRef<HTMLInputElement>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message) {
      return;
    }

    onSend(message);
    setMessage('');
    inputRef.current.focus();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (
      settings.sendOnCtrlEnter === SendOption.on
        ? e.ctrlKey && e.key === 'Enter'
        : e.key === 'Enter'
    ) {
      handleSend();
    }
  };

  return (
    <div
      data-testid="message-input"
      className={classnames(classes.root, className)}
    >
      <Input
        ref={inputRef}
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={classes.input}
      />
      <Button color="accent" onClick={handleSend} disabled={!message}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
