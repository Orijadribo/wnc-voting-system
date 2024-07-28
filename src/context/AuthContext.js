import { createContext, useReducer, useEffect } from 'react';
import AuthReducer from './AuthReducer';

const getCurrentUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  try {
    return user ? JSON.parse(user) : null;
  } catch (e) {
    return null;
  }
};

const INITIAL_STATE = {
  currentUser: getCurrentUserFromLocalStorage(),
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
