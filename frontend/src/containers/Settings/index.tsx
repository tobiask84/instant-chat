import React from 'react';
import classes from './Settings.module.scss';
import ThemeSelector from 'components/Settings/ThemeSelector';

const Settings = () => {
  return (
    <div className={classes.root}>
      <ThemeSelector />
    </div>
  );
};

export default Settings;
