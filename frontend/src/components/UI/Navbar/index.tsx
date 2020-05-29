import React from 'react';
import classnames from 'classnames';
import classes from './Navbar.module.scss';
import { Tab, TabId } from '../../../containers/Generic.types';
import useUnreadMessageCount from '../../../hooks/useUnreadMessageCount';

type Props = {
  tabs: Tab[];
  activeTabId: TabId;
  onChange: (id: TabId) => void;
};

const Navbar = ({ tabs, activeTabId, onChange }: Props) => {
  const unreadMessageCount = useUnreadMessageCount();

  let badge;
  if (unreadMessageCount > 9) {
    badge = '9+';
  } else if (unreadMessageCount === 0) {
    badge = '';
  } else {
    badge = unreadMessageCount.toString();
  }
  tabs[0].badge = badge;

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
          {tab.badge && <span className={classes.badge}>{tab.badge}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
