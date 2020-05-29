import { useContext } from 'react';
import { store } from '../store/store';
import { TabId } from '../containers/Generic.types';

export default function useActiveTab(): [TabId, (tab: TabId) => void] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.activeTab,
    (tab: TabId): void => {
      dispatch({ type: 'set-tab', tab });
    },
  ];
}
