import { useContext } from 'react';
import { store, actions } from '../store';
import { TabId } from '../pages/Generic.types';

export default function useActiveTab(): [TabId, (tab: TabId) => void] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.activeTab,
    (tab: TabId): void => {
      dispatch(actions.setTab(tab));
    },
  ];
}
