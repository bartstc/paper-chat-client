import React, { createContext, useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setToken } from '../utils/setToken';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initState = {
  isAuth: null,
  username: null
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_USER':
      return {
        isAuth: payload.id !== null,
        username: payload.username
      };

    case 'LOGOUT_USER':
      return {
        isAuth: false,
        username: null
      };

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initState);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const decoded = jwt_decode(localStorage.jwtToken);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch({ type: 'LOGOUT_USER' });
        // Unset axios headers
        setHeaders();
        // Redirect to signin
        window.location.href = '/signin';
      } else {
        // Set axios headers
        setHeaders(localStorage.jwtToken);
        // Get current user data
        getCurrentUser();
      }
    } else dispatch({ type: 'LOGOUT_USER' });
  }, [state.isAuth]);

  const setHeaders = async token => await setToken(token);

  const getCurrentUser = async () => {
    try {
      const { data } = await axios.get('/auth');
      dispatch({ type: 'SET_USER', payload: data });
    } catch (err) {
      dispatch({
        type: 'SET_USER',
        payload: {
          id: null,
          username: null
        }
      });
    }
  };

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const state = useContext(AuthStateContext);
  if (state === undefined)
    throw new Error('useAuthState must be used within a AuthProvider');
  return state;
};

const useAuthDispatch = () => {
  const dispatch = useContext(AuthDispatchContext);
  if (dispatch === undefined)
    throw new Error('useAuthDispatch must be used within a AuthProvider');
  return dispatch;
};

export { AuthProvider, useAuthState, useAuthDispatch };
