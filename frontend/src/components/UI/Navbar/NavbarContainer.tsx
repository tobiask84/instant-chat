import React from 'react';
import { Tab, TabId } from '../../../pages/Generic.types';
import useUnreadMessageCount from '../../../hooks/useUnreadMessageCount';
import { badgeCountToString } from 'components/UI/Navbar/UnreadMessages';
import { Chat } from '../../../pages/Chat';
import Settings from '../../../pages/Settings';
import Navbar from 'components/UI/Navbar/Navbar';
import useActiveTab from '../../../hooks/useActiveTab';

export const tabs: Tab[] = [
  { id: TabId.chat, label: 'Chat', component: <Chat /> },
  { id: TabId.settings, label: 'Settings', component: <Settings /> },
];

export const NavbarContainer = () => {
  const unreadMessageCount = useUnreadMessageCount();
  const [tabId, setActiveTabId] = useActiveTab();

  tabs[0].badge = badgeCountToString(unreadMessageCount);

  return <Navbar onChange={setActiveTabId} tabs={tabs} activeTabId={tabId} />;
};
