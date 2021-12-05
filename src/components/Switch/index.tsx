import React from 'react';
import { useSpring } from 'react-spring';

import { ISwitch } from './interface';
import { Container, ContentIndicator, Indicator } from './styles';

export const Switch: React.FC<ISwitch> = ({ value, title, onClick }) => {
  const animateIndicator = useSpring({
    x: value ? '100%' : '0%',
  });

  return (
    <Container>
      <span>{title}</span>
      <ContentIndicator onClick={onClick} type="button">
        <Indicator style={animateIndicator} />
      </ContentIndicator>
    </Container>
  );
};
