/* eslint-disable react/no-array-index-key */
import React from 'react';
import Skeleton from '../../Skeleton';

import { Container, Content } from './styles';

const NUMBER_OF_ITENS = 3;

export const LoadingJourney: React.FC = () => {
  return (
    <Container>
      {Array(NUMBER_OF_ITENS)
        .fill('')
        .map((_, index) => (
          <Content key={index}>
            <Skeleton className="skeleton" />
            {index !== NUMBER_OF_ITENS - 1 ? <div className="line" /> : null}
          </Content>
        ))}
    </Container>
  );
};
