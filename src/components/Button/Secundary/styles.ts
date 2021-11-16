import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 18px 0px 18px;
  border-radius: 12px;
  font-size: 24px;
  color: #FFC300;
  background-color: transparent;

  transition: color 2s;

  &:hover {
    color: ${lighten(0.2, '#FFC300')};
  }
`;
