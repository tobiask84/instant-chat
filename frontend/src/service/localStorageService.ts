import { v4 as uuidv4 } from 'uuid';
import { SettingsType } from '../containers/Settings/Settings.types';
import { defaultSettings } from '../containers/Settings/constants';

const MY_UUID_KEY = 'my-uuid';
const SETTINGS_KEY = 'settings';

export function getMyUuid(): string {
  const loadedUuid = localStorage.getItem(MY_UUID_KEY);
  if (loadedUuid == null) {
    const generatedUuid = uuidv4();
    localStorage.setItem(MY_UUID_KEY, generatedUuid);
    return generatedUuid;
  }
  return loadedUuid;
}

export function getSettings(): SettingsType {
  const json = localStorage.getItem(SETTINGS_KEY);
  return (json ? JSON.parse(json) : defaultSettings) as SettingsType;
}

export function saveSettings(settings: SettingsType): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
