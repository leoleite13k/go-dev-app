import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../../services/api';
import { AuthState, AuthContextData } from './interface';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoDev:token');
    const user = localStorage.getItem('@GoDev:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('signIn', { email, password });
    const { token, user } = response.data;

    localStorage.setItem('@GoDev:token', `${token.type} ${token.token}`);
    localStorage.setItem('@GoDev:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoDev:token');
    localStorage.removeItem('@GoDev:user');

    setData({} as AuthState);
  }, []);

  const signUp = useCallback(
    async ({ email, password, confirmPassword }) => {
      await api.post('signUp', {
        email,
        password,
        confirmPassword,
      });

      await signIn({ email, password });
    },
    [signIn],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, signUp, setData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
