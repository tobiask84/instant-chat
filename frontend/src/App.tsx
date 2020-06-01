import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import classes from './App.module.scss';
import useSettings from './hooks/useSettings';
import useTheme from './hooks/useTheme';
import { onReceiveMessage } from './service/apiService';
import { MessageType } from './pages/Chat';
import { actions, store } from './store';
import useActiveTab from './hooks/useActiveTab';
import { NavbarContainer, tabs } from 'components/UI/Navbar';

declare global {
  interface Window {
    visualViewport: any;
  }
}

const App = () => {
  const appDivRef = useRef<HTMLDivElement>();
  const { setThemeAttr } = useTheme();
  const [settings] = useSettings();
  const [tabId] = useActiveTab();
  const { dispatch } = useContext(store);

  useEffect(() => {
    onReceiveMessage((message: MessageType) => {
      dispatch(actions.receiveMessage(message));
    });
  }, [dispatch]);

  useEffect(() => {
    setThemeAttr(settings.theme);
  }, [settings.theme, setThemeAttr]);

  const activeTab = tabs.find((tab) => tab.id === tabId);

  useLayoutEffect(() => {
    // when the virtual keyboard opens the iphone scrolls the app
    // and it computes wrong viewport numbers -> fix
    const iphoneFix = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      if (window.visualViewport) {
        appDivRef.current.style.height = `${window.visualViewport.height}px`;
      }
    };
    if (window.visualViewport) {
      window.visualViewport.addEventListener('scroll', iphoneFix);
      window.visualViewport.addEventListener('resize', iphoneFix);
      iphoneFix();
    }
    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('scroll', iphoneFix);
        window.visualViewport.removeEventListener('resize', iphoneFix);
      }
    };
  }, []);

  return (
    <div ref={(r) => (appDivRef.current = r)} className={classes.root}>
      <NavbarContainer />
      <div className={classes.content}>{activeTab.component}</div>
    </div>
  );
};

export default App;
