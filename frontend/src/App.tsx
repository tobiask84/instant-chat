import React, { useState } from 'react';
import classes from './App.module.scss';
import Navbar from 'components/UI/Navbar';
import Chat from './containers/Chat';
import Settings from './containers/Settings';
import { Tab, TabId } from './containers/Generic.types';
import { StateProvider } from './store';

const tabs: Tab[] = [
  { id: TabId.chat, label: 'Chat', component: <Chat /> },
  { id: TabId.settings, label: 'Settings', component: <Settings /> },
];

const App = () => {
  const [tabId, setTabId] = useState<TabId>(TabId.chat);

  const activeTab = tabs.find((tab) => tab.id === tabId);

  return (
    <StateProvider>
      <div className={classes.root}>
        <Navbar onChange={setTabId} tabs={tabs} activeTabId={tabId} />
        <div className={classes.content}>{activeTab.component}</div>
      </div>
    </StateProvider>
  );
};

export default App;
