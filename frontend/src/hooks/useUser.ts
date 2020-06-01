import { useContext } from 'react';
import { store, actions } from '../store';
import { User } from '../pages/Generic.types';

export default function useUser(): [User, (user: User) => void] {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  return [
    globalState.state.user,
    (user: User): void => {
      dispatch(actions.setUser(user));
    },
  ];
}
