import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  RefObject,
} from 'react';
import classnames from 'classnames';
import classes from './Input.module.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string | number;
  type?: 'text' | 'number';
  className?: string;
};

const Input = (
  {
    onChange,
    onBlur,
    onKeyPress = () => {},
    name,
    value,
    type = 'text',
    className,
  }: Props,
  ref: RefObject<HTMLInputElement>,
) => {
  return (
    <input
      ref={ref}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      onKeyPress={onKeyPress}
      value={value}
      className={classnames(classes.root, className)}
    />
  );
};

export default React.forwardRef(Input);
