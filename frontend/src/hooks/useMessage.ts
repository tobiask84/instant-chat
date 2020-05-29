import { useContext } from 'react';
import { store } from '../store/store';
import { MessageType } from '../containers/Chat/Chat.types';

export default function useMessages(): [
  MessageType[],
  (userId: string, userName: string, text: string) => void,
] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.messages,
    (userId: string, userName: string, text: string): void => {
      dispatch({ type: 'send-message', message: { userId, userName, text } });
    },
  ];
}
