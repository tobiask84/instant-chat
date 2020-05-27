import { useContext } from 'react';
import { store } from '../store';

export default function useMessages() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return [
    globalState.state.messages,
    (message: string) => dispatch({ type: 'send-message', text: message }),
  ];
}
