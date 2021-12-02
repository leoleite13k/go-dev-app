import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  height: 68px;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 48px;
  background-color: #000814;
  z-index: 4;
`;

export const ButtonRoute = styled(animated.button)`
  height: 100%;
  width: 136px;
  border: none;
  background-color: transparent;

  color: #ffd60a;
  font-size: 22px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;
