import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
  border-radius: 12px;
  background-color: #ffc300;
  font-size: 18px;
  font-weight: 500;
  color: #000814;

  transition: background-color 1.5s;

  &:hover {
    background-color: ${lighten(0.16, '#FFC300')};
  }

  > svg {
    animation: ${rotate} 0.5s linear infinite;
  }
`;
