import React, { createContext, ReactNode, useEffect, useReducer } from 'react';
import io from 'socket.io-client';
import { MessageType } from './containers/Chat/Chat.types';

type Action = {
  type: 'send-message' | 'receive-message';
  message: MessageType;
};
type State = { messages: MessageType[] };

const initialState: State = {
  messages: [],
};
const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  { state: initialState, dispatch: () => null },
);
const { Provider } = store;

const socket = io('http://localhost:3000');
const sendMessage = (message: MessageType) => {
  socket.emit('chat message', message);
};

const reducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'send-message': {
      sendMessage(action.message);
      return state;
    }
    case 'receive-message': {
      return { messages: [...state.messages, action.message] };
    }
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }: { children: ReactNode }): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on('chat message', (message: MessageType) => {
      dispatch({ type: 'receive-message', message });
    });
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
