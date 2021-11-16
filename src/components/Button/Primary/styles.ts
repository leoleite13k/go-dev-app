import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 18px 0px 18px;
  border-radius: 12px;
  font-size: 24px;
  background-color: #FFC300;

  transition: background-color 2s;

  &:hover {
    background-color: ${lighten(0.16, '#FFC300')};
  }
`;
