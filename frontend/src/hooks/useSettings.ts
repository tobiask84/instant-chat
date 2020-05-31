import { useContext } from 'react';
import { store } from '../store/store';
import { SettingsType } from '../pages/Settings/Settings.types';

export default function useSettings(): [
  SettingsType,
  (settings: SettingsType) => void,
] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.settings,
    (settings: SettingsType): void => {
      dispatch({ type: 'set-settings', settings });
    },
  ];
}
