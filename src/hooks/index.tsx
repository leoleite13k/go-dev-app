import React from 'react';

import { AuthProvider } from './auth';
import { ProfileProvider } from './profile';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ProfileProvider>
      <ToastProvider>{children}</ToastProvider>
    </ProfileProvider>
  </AuthProvider>
);

export default AppProvider;
