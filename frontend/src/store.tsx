import React, { createContext, useEffect, useReducer } from 'react';
import io from 'socket.io-client';

type Action = { type: 'send-message' | 'receive-message'; text: string };
type State = { messages: string[] };

const initialState: State = {
  messages: [],
};
const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  { state: initialState, dispatch: () => null },
);
const { Provider } = store;

const socket = io('http://localhost:3000');
const sendMessage = (text: string) => {
  socket.emit('chat message', text);
};

const StateProvider = ({ children }: any): any => {
  const [state, dispatch] = useReducer((state: State, action: Action): any => {
    switch (action.type) {
      case 'send-message': {
        sendMessage(action.text);
        return state;
      }
      case 'receive-message': {
        return { messages: [...state.messages, action.text] };
      }
      default:
        throw new Error();
    }
  }, initialState);

  useEffect(() => {
    socket.on('chat message', (message: string) => {
      dispatch({ type: 'receive-message', text: message });
    });
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
