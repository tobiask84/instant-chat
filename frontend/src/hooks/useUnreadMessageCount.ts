import { useContext } from 'react';
import { store } from '../store/store';

export default function useUnreadMessageCount(): number {
  const globalState = useContext(store);
  return globalState.state.unreadMessageCount;
}
