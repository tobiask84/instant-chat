import { useContext } from 'react';
import { store } from '../store/store';
import { SettingsType } from '../pages/Settings/Settings.types';
import { actions } from '../store';

export default function useSettings(): [
  SettingsType,
  (settings: SettingsType) => void,
] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.settings,
    (settings: SettingsType): void => {
      dispatch(actions.setSettings(settings));
    },
  ];
}
