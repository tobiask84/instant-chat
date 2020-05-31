import React, { useContext, useEffect } from 'react';
import classes from './App.module.scss';
import useSettings from './hooks/useSettings';
import useTheme from './hooks/useTheme';
import { onReceiveMessage } from './service/apiService';
import { MessageType } from './pages/Chat';
import { store } from './store/store';
import useActiveTab from './hooks/useActiveTab';
import { NavbarContainer, tabs } from 'components/UI/Navbar';

const App = () => {
  const { setThemeAttr } = useTheme();
  const [settings] = useSettings();
  const [tabId] = useActiveTab();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    onReceiveMessage((message: MessageType) => {
      dispatch({ type: 'receive-message', message });
    });
  }, [dispatch]);

  useEffect(() => {
    setThemeAttr(settings.theme);
  }, [settings.theme, setThemeAttr]);

  const activeTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className={classes.root}>
      <NavbarContainer />
      <div className={classes.content}>{activeTab.component}</div>
    </div>
  );
};

export default App;
