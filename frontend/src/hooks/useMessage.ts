import { useContext } from 'react';
import { store } from '../store';
import { MessageType } from '../pages/Chat';
import { sendMessage } from '../service/apiService';

export default function useMessages(): [
  MessageType[],
  (userId: string, userName: string, text: string) => void,
] {
  const globalState = useContext(store);

  return [
    globalState.state.messages,
    (userId: string, userName: string, text: string): void => {
      sendMessage({ userId, userName, text });
    },
  ];
}
