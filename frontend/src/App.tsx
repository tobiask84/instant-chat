import React, { useContext, useEffect } from 'react';
import classes from './App.module.scss';
import Navbar from 'components/UI/Navbar';
import Chat from './containers/Chat';
import Settings from './containers/Settings';
import { Tab, TabId } from './containers/Generic.types';
import useActiveTab from './hooks/useActiveTab';
import useSettings from './hooks/useSettings';
import useTheme from './hooks/useTheme';
import { onReceiveMessage } from './service/apiService';
import { MessageType } from './containers/Chat/Chat.types';
import { store } from './store/store';

export const tabs: Tab[] = [
  { id: TabId.chat, label: 'Chat', component: <Chat /> },
  { id: TabId.settings, label: 'Settings', component: <Settings /> },
];

const App = () => {
  const [tabId, setActiveTabId] = useActiveTab();
  const { setThemeAttr } = useTheme();
  const [settings] = useSettings();
  const globalState = useContext(store);
  const { dispatch } = globalState;

  useEffect(() => {
    onReceiveMessage((message: MessageType) => {
      dispatch({ type: 'receive-message', message });
    });
  }, []);

  useEffect(() => {
    setThemeAttr(settings.theme);
  }, [settings.theme]);

  const activeTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className={classes.root}>
      <Navbar onChange={setActiveTabId} tabs={tabs} activeTabId={tabId} />
      <div className={classes.content}>{activeTab.component}</div>
    </div>
  );
};

export default App;
