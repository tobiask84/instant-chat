import React, { ChangeEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import classes from './Input.module.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
  type?: 'text' | 'number';
  className?: string;
};

const Input = ({
  onChange,
  onKeyPress = () => {},
  name,
  value,
  type = 'text',
  className,
}: Props) => {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
      className={classnames(classes.root, className)}
    />
  );
};

export default Input;
