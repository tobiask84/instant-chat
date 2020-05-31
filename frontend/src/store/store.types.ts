import { MessageType } from '../pages/Chat';
import { SettingsType } from '../pages/Settings/Settings.types';
import { TabId } from '../pages/Generic.types';
import { User } from '../pages/Generic.types';

export type MessageAction = {
  type: 'receive-message';
  message: MessageType;
};

export type SettingsAction = {
  type: 'set-settings';
  settings: SettingsType;
};

export type UserAction = {
  type: 'set-user';
  user: User;
};

export type TabChangeAction = {
  type: 'set-tab';
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
