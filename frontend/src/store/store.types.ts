import { MessageType } from '../containers/Chat/Chat.types';
import { SettingsType } from '../containers/Settings/Settings.types';
import { TabId } from '../containers/Generic.types';
import { User } from '../containers/Generic.types';

export type MessageAction = {
  type: 'send-message' | 'receive-message';
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

export type Action = MessageAction | SettingsAction | UserAction | TabChangeAction;

export type State = {
  messages?: MessageType[];
  settings?: SettingsType;
  unreadMessageCount: number;
  activeTab: TabId;
  user?: User;
};
