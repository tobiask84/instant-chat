import React, { ChangeEvent, KeyboardEvent, useMemo, useState } from 'react';
import classnames from 'classnames';
import classes from './MessageInput.module.scss';
import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import {
  SendOption,
  SettingsType,
} from '../../../containers/Settings/Settings.types';
import { getSettings } from '../../../service/localStorageService';

type Props = {
  onSend: (message: string) => void;
  className?: string;
};

const MessageInput = ({ onSend, className }: Props) => {
  const [message, setMessage] = useState<string>('');
  const settings = useMemo<SettingsType>(getSettings, []);

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
    <div className={classnames(classes.root, className)}>
      <Input
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
