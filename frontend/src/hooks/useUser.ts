import { useContext } from 'react';
import { store } from '../store/store';
import { User } from '../pages/Generic.types';

export default function useUser(): [User, (user: User) => void] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.user,
    (user: User): void => {
      dispatch({ type: 'set-user', user });
    },
  ];
}
