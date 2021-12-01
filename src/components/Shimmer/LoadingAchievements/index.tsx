import React from 'react';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const NUMBER_OF_ITENS = 6;

export const LoadingAchievements: React.FC = () => {
  return (
    <Container>
      {Array(NUMBER_OF_ITENS)
        .fill('')
        .map(() => (
          <Skeleton className="skeleton" />
        ))}
    </Container>
  );
};
