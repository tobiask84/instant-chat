import React, { createContext, useEffect, useReducer } from 'react';
import io from 'socket.io-client';

type Action = {
  type: 'send-message' | 'receive-message';
  userId: string;
  text: string;
};
type State = { messages: string[] };

const initialState: State = {
  messages: [],
};
const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>(
  { state: initialState, dispatch: () => null },
);
const { Provider } = store;

const socket = io('http://localhost:3000');
const sendMessage = (userId: string, text: string) => {
  socket.emit('chat message', userId, text);
};

const reducer = (state: State, action: Action): any => {
  switch (action.type) {
    case 'send-message': {
      sendMessage(action.userId, action.text);
      return state;
    }
    case 'receive-message': {
      const { userId, text } = action;
      return { messages: [...state.messages, { userId, text }] };
    }
    default:
      throw new Error();
  }
};

const StateProvider = ({ children }: any): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on('chat message', (userId: string, text: string) => {
      dispatch({ type: 'receive-message', userId, text });
    });
  }, []);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
