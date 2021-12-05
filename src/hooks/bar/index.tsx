import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../../services/api';
import { useProfile } from '../profile';
import { IUserTracks, BarContextData } from './interface';

const BarContext = createContext<BarContextData>({} as BarContextData);

const BarProvider: React.FC = ({ children }) => {
  const [userTracks, setUserTracks] = useState<IUserTracks[]>([]);
  const { getProfile } = useProfile();

  const getUserTracks = useCallback(async () => {
    const { data } = await api.get('/userTracks');
    await getProfile();

    setUserTracks(data);
  }, [getProfile]);

  return (
    <BarContext.Provider value={{ userTracks, getUserTracks }}>
      {children}
    </BarContext.Provider>
  );
};

function useBar(): BarContextData {
  const context = useContext(BarContext);

  if (!context) {
    throw new Error('useBar must be used within an BarProvider');
  }

  return context;
}

export { BarProvider, useBar };
