import React, { ChangeEvent } from 'react';
import classnames from 'classnames';
import classes from './Select.module.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: {
    id: string;
    label: string;
    value: string | number | string[];
  }[];
  name?: string;
  value?: string | number;
  className?: string;
};

const Select = ({ onChange, options, name, value, className }: Props) => {
  return (
    <select
      value={value}
      name={name}
      onChange={onChange}
      className={classnames(classes.root, className)}
    >
      {options.map(({ id, label, value }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
