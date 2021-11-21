/* eslint-disable react/prop-types */
import React from 'react';

import { IInputProps } from './interface';
import { Container, Content } from './styles';

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ errorMessage, ...rest }, ref) => (
    <Container>
      <Content hasError={!!errorMessage}>
        <input ref={ref} {...rest} />
      </Content>
      {errorMessage && <span>{errorMessage}</span>}
    </Container>
  ),
);
