export enum Theme {
  dark = 'dark',
  light = 'light',
}

export enum Language {
  en = 'en',
}

export enum SendOption {
  on = 'on',
  off = 'off',
}

export enum ClockFormat {
  am = '12h',
  full = '24h',
}

export type SettingsType = {
  id?: string;
  name?: string;
  theme: Theme;
  sendOnCtrlEnter: SendOption;
  clockFormat: ClockFormat;
  language: Language;
};
