import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  width: 100%;
  padding: 18px 0px 18px;
  margin-bottom: 24px;
  border-radius: 12px;
  background-color: #FFC300;
  font-size: 18px;
  font-weight: 500;

  transition: background-color 1s;

  &:hover {
    background-color: ${lighten(0.16, '#FFC300')};
  }
`;
