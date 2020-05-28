import { useContext } from 'react';
import { store } from '../store';

export default function useMessages(): Array<any> {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return [
    globalState.state.messages,
    (userId: string, userName: string, text: string): void => {
      dispatch({ type: 'send-message', message: { userId, userName, text } });
    },
  ];
}
