import React, { useState } from 'react';
import classes from './App.module.scss';
import Navbar from 'components/Navbar';
import Chat from './containers/Chat';
import Settings from './containers/Settings';
import { Tab, TabId } from './containers/Generic.types';

const tabs: Tab[] = [
  { id: TabId.chat, label: 'Chat', component: <Chat /> },
  { id: TabId.settings, label: 'Settings', component: <Settings /> },
];

const App = () => {
  const [tabId, setTabId] = useState<TabId>(TabId.chat);

  const activeTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className={classes.root}>
      <Navbar onChange={setTabId} tabs={tabs} activeTabId={tabId} />
      <div className={classes.body}>{activeTab.component}</div>
    </div>
  );
};

export default App;
