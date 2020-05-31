import React, { ReactNode, MouseEvent } from 'react';
import classnames from 'classnames';
import classes from './Button.module.scss';

type Props = {
  onClick: (e: MouseEvent) => void;
  type?: 'submit' | 'button';
  className?: string;
  children?: ReactNode;
  disabled?: boolean;
  color?: 'accent';
};

const Button = ({
  onClick,
  type = 'button',
  className,
  children,
  disabled,
  color,
}: Props) => {
  return (
    <button
      type={type}
      className={classnames(
        classes.root,
        { [classes.accent]: color === 'accent' },
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
