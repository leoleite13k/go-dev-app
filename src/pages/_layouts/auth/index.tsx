import React from 'react';

import { Header } from '../../../components/Header';
import { Container } from './styles';

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
