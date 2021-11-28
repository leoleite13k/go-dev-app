import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 24px;

  > span {
    color: #ffc300;
  }
`;

export const ContentIndicator = styled.button`
  width: 48px;
  height: 24px;
  border-radius: 12px;
  margin-top: 6px;
  overflow: hidden;
  border: 1px solid #14213d;
  background-color: #ccc;
`;

export const Indicator = styled(animated.div)`
  width: 50%;
  height: 100%;
  border-radius: 50%;
  background-color: #ffc300;
`;
