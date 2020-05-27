import React, { ChangeEvent } from 'react';
import classnames from 'classnames';
import classes from './RadioButton.module.scss';

type Props = {
  id: string;
  label: string;
  value: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  className?: string;
};

const RadioButton = ({
  id,
  label,
  value,
  name,
  onChange,
  checked,
  className,
}: Props) => {
  return (
    <div className={classnames(classes.root, className)}>
      <input
        className={classes.input}
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
