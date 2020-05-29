import { MessageType } from '../containers/Chat/Chat.types';
import { SettingsType } from '../containers/Settings/Settings.types';

export type MessageAction = {
  type: 'send-message' | 'receive-message';
  message: MessageType;
};

export type SettingsAction = {
  type: 'set-settings';
  settings: SettingsType;
};

export type Action = MessageAction | SettingsAction;

export type State = {
  messages?: MessageType[];
  settings?: SettingsType;
};
