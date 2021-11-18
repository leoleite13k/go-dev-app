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
  background-color: transparent;
  font-size: 18px;
  font-weight: 500;
  color: #ffc300;

  transition: color 1s;

  &:hover {
    color: ${lighten(0.2, '#FFC300')};
  }

  > svg {
    animation: ${rotate} 0.5s linear infinite;
  }
`;
