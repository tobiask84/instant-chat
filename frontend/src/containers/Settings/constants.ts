import {
  ClockFormat,
  Language,
  SendOption,
  SettingsType,
  Theme,
} from './Settings.types';

export const defaultSettings: SettingsType = {
  name: 'User',
  theme: Theme.light,
  sendOnCtrlEnter: SendOption.off,
  clockFormat: ClockFormat.am,
  language: Language.en,
};

export const themesOptions = [
  { id: 'theme1', label: 'Light', value: Theme.light },
  { id: 'theme2', label: 'Dark', value: Theme.dark },
];

export const sendOptions = [
  { id: 'send1', label: 'On', value: SendOption.on },
  { id: 'send2', label: 'Off', value: SendOption.off },
];

export const clockFormatOptions = [
  { id: 'clock1', label: '12 Hours', value: ClockFormat.am },
  { id: 'clock2', label: '24 Hours', value: ClockFormat.full },
];

export const languageOptions = [
  { id: 'lang1', label: 'English', value: Language.en },
];
