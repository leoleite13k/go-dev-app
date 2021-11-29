import React from 'react';

import { Header } from '../../../components/Header';
import { Bar } from '../../../components/Bar';
import { Container } from './styles';

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Bar />
      {children}
    </Container>
  );
};
