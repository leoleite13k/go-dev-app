import React, { createContext, useCallback, useContext } from 'react';

import api from '../../services/api';
import { useAuth } from '../auth';
import { TUser } from '../auth/interface';
import { IProfileContextData, IProfile } from './interface';

const ProfileContext = createContext<IProfileContextData>(
  {} as IProfileContextData,
);

const ProfileProvider: React.FC = ({ children }) => {
  const { setData } = useAuth();

  const createProfile = useCallback(
    async ({ fullName, avatarOptions }) => {
      const { data: profile } = await api.post('profiles', {
        fullName,
        avatarOptions,
      });

      const storageUser = localStorage.getItem('@GoDev:user') as string;
      const oldUser: TUser = JSON.parse(storageUser);
      const user = { ...oldUser, profile };

      localStorage.setItem('@GoDev:user', JSON.stringify(user));
      setData(prevData => ({ ...prevData, user }));
    },
    [setData],
  );

  const getProfile = useCallback(async () => {
    const storageUser = localStorage.getItem('@GoDev:user') as string;
    const oldUser: TUser = JSON.parse(storageUser);
    const { data: profile }: { data: IProfile } = await api.get(
      `profiles/${oldUser.id}`,
    );

    const user = { ...oldUser, profile };

    localStorage.setItem('@GoDev:user', JSON.stringify(user));
    setData(prevData => ({ ...prevData, user }));
  }, [setData]);

  const updateProfile = useCallback(
    async ({ fullName, avatarOptions }) => {
      const storageUser = localStorage.getItem('@GoDev:user') as string;

      const oldUser: TUser = JSON.parse(storageUser);
      const { data: profile } = await api.put(`profiles/${oldUser.id}`, {
        fullName,
        avatarOptions,
      });
      const user = { ...oldUser, profile };

      localStorage.setItem('@GoDev:user', JSON.stringify(user));
      setData(prevData => ({ ...prevData, user }));
    },
    [setData],
  );

  return (
    <ProfileContext.Provider
      value={{ createProfile, getProfile, updateProfile }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

function useProfile(): IProfileContextData {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error('useProfile must be used within an ProfileProvider');
  }

  return context;
}

export { ProfileProvider, useProfile };
