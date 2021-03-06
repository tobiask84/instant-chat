import React, { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import classes from './Form.module.scss';
import {
  defaultSettings,
  sendOptions,
  themesOptions,
  clockFormatOptions,
} from '../../../pages/Settings/constants';
import RadioButtons from '../../UI/RadioButtons';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import useTheme from '../../../hooks/useTheme';
import useSettings from '../../../hooks/useSettings';
import useUser from '../../../hooks/useUser';

type Props = {
  className?: string;
};

const Form = ({ className }: Props) => {
  const { setThemeAttr } = useTheme();
  const [settings, setSettings] = useSettings();
  const [user, setUser] = useUser();
  const [name, setName] = useState<string>(() => user.name);

  useEffect(() => {
    setThemeAttr(settings.theme);
  }, [settings.theme, setThemeAttr]);

  const onNameBlur = () => {
    setUser({ name });
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const reset = () => {
    setSettings(defaultSettings);
  };

  return (
    <div className={classnames(classes.root, className)}>
      <div className={classes.group}>
        <h3 className={classes.label}>Name</h3>
        <Input
          name="name"
          value={name}
          onChange={onNameChange}
          onBlur={onNameBlur}
        />
      </div>
      <div className={classes.group}>
        <h3 className={classes.label}>Interface color</h3>
        <RadioButtons
          options={themesOptions}
          onChange={onChange}
          name="theme"
          value={settings.theme}
        />
      </div>
      <div className={classes.group}>
        <h3 className={classes.label}>Clock display</h3>
        <RadioButtons
          options={clockFormatOptions}
          onChange={onChange}
          name="clockFormat"
          value={settings.clockFormat}
        />
      </div>
      <div className={classes.group}>
        <h3 className={classes.label}>Send messages on CTRL+ENTER</h3>
        <RadioButtons
          options={sendOptions}
          onChange={onChange}
          name="sendOnCtrlEnter"
          value={settings.sendOnCtrlEnter}
        />
      </div>
      {/*
      todo: finish implementation
      <div className={classes.group}>
        <h3 className={classes.label}>Language</h3>
        <Select
          options={languageOptions}
          onChange={onChange}
          name="language"
          value={settings.language}
        />
      </div>
       */}
      <Button onClick={reset} className={classes.resetButton}>
        Reset to defaults
      </Button>
    </div>
  );
};

export default Form;
