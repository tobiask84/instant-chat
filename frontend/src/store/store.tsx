import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import { MessageType } from '../containers/Chat/Chat.types';
import { Action, State } from './store.types';
import { defaultSettings } from '../containers/Settings/constants';
import { getSettings, saveSettings } from '../service/localStorageService';
import useTheme from '../hooks/useTheme';
import { sendMessage, onReceiveMessage } from '../service/apiService';

const initialState: State = {
  messages: [],
  settings: defaultSettings,
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
      return { ...state, settings: { ...settings } };
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
    dispatch({ type: 'set-settings', settings });
    setThemeAttr(settings.theme);

    onReceiveMessage((message: MessageType) => {
      dispatch({ type: 'receive-message', message });
    });
  }, [setThemeAttr]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
