import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { MessageType } from '../containers/Chat/Chat.types';
import { Action, State } from './store.types';
import { defaultSettings } from '../containers/Settings/constants';
import {
  getSettings,
  getUser,
  saveSettings,
  saveUser,
} from '../service/localStorageService';
import useTheme from '../hooks/useTheme';
import { sendMessage, onReceiveMessage } from '../service/apiService';

const initialState: State = {
  messages: [],
  settings: defaultSettings,
  user: {},
};

const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  { state: initialState, dispatch: () => null },
);
const { Provider } = store;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'send-message': {
      sendMessage(action.message);
      return state;
    }
    case 'receive-message': {
      return { ...state, messages: [...state.messages, action.message] };
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
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }: { children: ReactNode }) => {
  const { setThemeAttr } = useTheme();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const settings = getSettings();
    const user = getUser();
    dispatch({ type: 'set-settings', settings });
    dispatch({ type: 'set-user', user });
    setThemeAttr(settings.theme);

    onReceiveMessage((message: MessageType) => {
      dispatch({ type: 'receive-message', message });
    });
  }, [setThemeAttr]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
