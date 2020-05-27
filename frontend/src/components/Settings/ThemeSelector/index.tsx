import React, { ChangeEvent, useEffect, useState } from 'react';
import classnames from 'classnames';
import classes from './ThemeSelector.module.scss';
import { Theme } from '../../../containers/Settings/Settings.types';
import RadioButton from 'components/UI/RadioButton';

type Props = {
  className?: string;
};

const options = [
  { id: Theme.light, label: 'Light' },
  { id: Theme.dark, label: 'Dark' },
];

const ThemeSelector = ({ className }: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value as Theme);
  };

  return (
    <div className={classnames(classes.root, className)}>
      <h3 className={classes.label}>Interface color</h3>
      <div className={classes.row}>
        {options.map((option) => (
          <RadioButton
            className={classes.radioButton}
            key={option.id}
            id={option.id}
            label={option.label}
            value={option.id}
            onChange={onSelect}
            name="theme"
            checked={option.id === theme}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
