import React from 'react';
import classes from './App.module.scss';
import Navbar from 'components/UI/Navbar';
import Chat from './containers/Chat';
import Settings from './containers/Settings';
import { Tab, TabId } from './containers/Generic.types';
import useActiveTab from './hooks/useActiveTab';

export const tabs: Tab[] = [
  { id: TabId.chat, label: 'Chat', component: <Chat /> },
  { id: TabId.settings, label: 'Settings', component: <Settings /> },
];

const App = () => {
  const [tabId, setActiveTabId] = useActiveTab();
  const activeTab = tabs.find((tab) => tab.id === tabId);

  return (
      <div className={classes.root}>
        <Navbar onChange={setActiveTabId} tabs={tabs} activeTabId={tabId} />
        <div className={classes.content}>{activeTab.component}</div>
      </div>
  );
};

export default App;
