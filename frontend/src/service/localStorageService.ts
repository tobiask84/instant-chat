import { v4 as uuidv4 } from 'uuid';
import { SettingsType } from '../pages/Settings/Settings.types';
import { defaultSettings } from '../pages/Settings/constants';
import { User } from '../pages/Generic.types';

const USER_KEY = 'user';
const SETTINGS_KEY = 'settings';

export function getUser(): User {
  const user = localStorage.getItem(USER_KEY);
  if (!user) {
    const newUser = { id: uuidv4(), name: 'User' };
    localStorage.setItem(USER_KEY, JSON.stringify(newUser));
    return newUser;
  }

  return JSON.parse(user);
}

export function saveUser(user: User): void {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getSettings(): SettingsType {
  const json = localStorage.getItem(SETTINGS_KEY);
  return json ? JSON.parse(json) : (defaultSettings as SettingsType);
}

export function saveSettings(settings: SettingsType): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
