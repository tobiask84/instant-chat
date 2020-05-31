import React, { createContext, ReactNode, useReducer } from 'react';
import { Action, State } from './store.types';
import {
  getSettings,
  getUser,
  saveSettings,
  saveUser,
} from '../service/localStorageService';
import { TabId } from '../pages/Generic.types';

const initialState: State = {
  messages: [],
  settings: getSettings(),
  user: getUser(),
  activeTab: TabId.chat,
  unreadMessageCount: 0,
};

const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  { state: initialState, dispatch: () => null },
);
const { Provider } = store;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'receive-message': {
      const isUnread = state.activeTab === TabId.settings;
      const unreadMessageCount = state.unreadMessageCount + (isUnread ? 1 : 0);
      return {
        ...state,
        messages: [...state.messages, action.message],
        unreadMessageCount,
      };
    }
    case 'set-settings': {
      const settings = { ...state.settings, ...action.settings };
      saveSettings(settings);
      return { ...state, settings };
    }
    case 'set-user': {
      const user = { ...state.user, ...action.user };
      saveUser(user);
      return { ...state, user };
    }
    case 'set-tab': {
      const { tab } = action;
      return {
        ...state,
        activeTab: action.tab,
        unreadMessageCount: tab === TabId.chat ? 0 : state.unreadMessageCount,
      };
    }
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
