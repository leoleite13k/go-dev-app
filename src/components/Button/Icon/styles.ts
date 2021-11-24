import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { TColumn } from '../interface';

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Button = styled.button`
  padding: 8px;
  border-radius: 6px;
  background-color: #ffc300;
  color: #000814;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color 1.5s;

  &:hover {
    background-color: ${lighten(0.16, '#FFC300')};
  }

  .svgLoading {
    animation: ${rotate} 0.5s linear infinite;
  }
`;
