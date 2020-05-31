import React from 'react';
import classnames from 'classnames';
import classes from './Navbar.module.scss';
import { Tab, TabId } from '../../../pages/Generic.types';

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
            [classes.blink]: tab.badge,
          })}
          onClick={() => onChange(tab.id)}
        >
          {tab.badge && <span className={classes.badge}>{tab.badge}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
