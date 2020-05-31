import React, { ChangeEvent } from 'react';
import classnames from 'classnames';
import classes from './RadioButtons.module.scss';

type Props = {
  name: string;
  options: {
    id: string;
    label: string;
    value: string | number | string[];
  }[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
};

const RadioButtons = ({ name, options, onChange, value, className }: Props) => {
  return (
    <div className={classnames(classes.root, className)}>
      {options.map(({ id, label, value: val }) => (
        <div key={id} className={classes.item}>
          <input
            className={classes.input}
            id={id}
            type="radio"
            value={val}
            checked={value === val}
            onChange={onChange}
            name={name}
          />
          <label htmlFor={id} className={classes.label}>
            {label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioButtons;
