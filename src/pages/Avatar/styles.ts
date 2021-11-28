import styled, { keyframes } from 'styled-components';
import { animated } from 'react-spring';

const rotate = keyframes`
  100% {
    transform: rotate(360deg)
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 58px;

  > h1 {
    font-size: 48px;
    color: #ffd60a;
    text-align: center;
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    max-width: 248px;
  }

  > span {
    color: #ffd60a;
    text-align: center;
    margin-top: 32px;
    margin-bottom: 12px;
  }

  .btnRandom {
    margin-top: 32px;
  }

  .svgDice {
    animation: ${rotate} 0.3s linear forwards;
  }
`;

export const Content = styled(animated.div)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentAvatar = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  > button {
    position: absolute;
    top: 24px;
    right: 12px;
  }
`;

export const ContentCustom = styled(animated.div)`
  position: relative;
  height: 584px;
  display: flex;
  flex-direction: column;
  background-color: #14213d;
  margin-top: 24px;
  margin-left: 12px;
  border-radius: 4px;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    padding: 18px;

    > h1 {
      color: #ffd60a;
      margin-bottom: 18px;
    }
  }
`;

export const ContentSwitch = styled.div`
  width: 100%;
  display: flex;
`;
