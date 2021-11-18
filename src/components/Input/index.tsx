import React from 'react';

import { TInputProps } from './interface';
import { Container } from './styles';

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ ...rest }, ref) => (
    <Container>
      <input ref={ref} {...rest} />
    </Container>
  ),
);
