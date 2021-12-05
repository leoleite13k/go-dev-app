import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProfileProvider } from './profile';
import { BarProvider } from './bar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ProfileProvider>
        <BarProvider>{children}</BarProvider>
      </ProfileProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
