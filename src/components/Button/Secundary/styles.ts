import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  width: 100%;
  padding: 18px 0px 18px;
  margin-bottom: 24px;
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  color: #FFC300;

  transition: color 1s;

  &:hover {
    color: ${lighten(0.2, '#FFC300')};
  }
`;
