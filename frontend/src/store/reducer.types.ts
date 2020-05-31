import { MessageType } from '../pages/Chat';
import { SettingsType } from '../pages/Settings/Settings.types';
import { TabId } from '../pages/Generic.types';
import { User } from '../pages/Generic.types';

type receiveMessageType = 'receive-message';
type setSettingsType = 'set-settings';
type setUserType = 'set-user';
type setTabType = 'set-tab';

const RECEIVE_MESSAGE: receiveMessageType = 'receive-message';
const SET_SETTINGS: setSettingsType = 'set-settings';
const SET_USER: setUserType = 'set-user';
const SET_TAB: setTabType = 'set-tab';

const receiveMessage = (message: MessageType) => ({
  type: RECEIVE_MESSAGE,
  message,
});

const setSettings = (settings: SettingsType) => ({
  type: SET_SETTINGS,
  settings,
});

const setUser = (user: User) => ({
  type: SET_USER,
  user,
});

const setTab = (tab: TabId): TabChangeAction => ({
  type: SET_TAB,
  tab,
});

export const actions = { receiveMessage, setSettings, setTab, setUser };

export type MessageAction = {
  type: receiveMessageType;
  message: MessageType;
};

export type SettingsAction = {
  type: setSettingsType;
  settings: SettingsType;
};

export type UserAction = {
  type: setUserType;
  user: User;
};

export type TabChangeAction = {
  type: setTabType;
  tab: TabId;
};

export type Action =
  | MessageAction
  | SettingsAction
  | UserAction
  | TabChangeAction;

export type State = {
  messages?: MessageType[];
  settings?: SettingsType;
  unreadMessageCount: number;
  activeTab: TabId;
  user?: User;
};
