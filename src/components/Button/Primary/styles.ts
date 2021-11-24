import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

import { TColumn } from '../interface';

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
  padding: 0px 8px;
  border-radius: 12px;
  background-color: #ffc300;
  font-size: 18px;
  font-weight: 500;
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

export const Column = styled.div<TColumn>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  margin: 0px 4px;
`;
