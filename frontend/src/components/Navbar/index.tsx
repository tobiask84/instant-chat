import React from 'react';
import classnames from 'classnames';
import classes from './Navbar.module.scss';
import { Tab, TabId } from '../../containers/Generic.types';

type Props = {
  tabs: Tab[];
  activeTabId: TabId;
  onChange: (id: TabId) => void;
};

const Navbar = ({ tabs, activeTabId, onChange }: Props) => {
  return (
    <div className={classes.root}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={classnames(classes.tab, {
            [classes.active]: activeTabId === tab.id,
          })}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
