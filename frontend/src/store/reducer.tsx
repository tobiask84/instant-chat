import {
  Action,
  MessageAction,
  SettingsAction,
  State,
  TabChangeAction,
  UserAction,
} from './reducer.types';
import {
  getSettings,
  getUser,
  saveSettings,
  saveUser,
} from '../service/localStorageService';
import { TabId } from '../pages/Generic.types';

export const initialState: State = {
  messages: [],
  settings: getSettings(),
  user: getUser(),
  activeTab: TabId.chat,
  unreadMessageCount: 0,
};

export const reducer = (state: State, action: Action): State => {
  switch (action && action.type) {
    case 'receive-message': {
      const isUnread = state.activeTab === TabId.settings;
      const unreadMessageCount = state.unreadMessageCount + (isUnread ? 1 : 0);
      return {
        ...state,
        messages: [...state.messages, (action as MessageAction).message],
        unreadMessageCount,
      };
    }
    case 'set-settings': {
      const settings = {
        ...state.settings,
        ...(action as SettingsAction).settings,
      };
      saveSettings(settings);
      return { ...state, settings };
    }
    case 'set-user': {
      const user = { ...state.user, ...(action as UserAction).user };
      saveUser(user);
      return { ...state, user };
    }
    case 'set-tab': {
      const { tab } = action as TabChangeAction;
      return {
        ...state,
        activeTab: (action as TabChangeAction).tab,
        unreadMessageCount: tab === TabId.chat ? 0 : state.unreadMessageCount,
      };
    }
    default:
      throw new Error();
  }
};
