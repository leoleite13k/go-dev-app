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
  padding: 32px;
`;

export const Content = styled(animated.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentAvatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 512px;
  max-width: 574px;
  min-width: 424px;

  .btnSettings {
    position: absolute;
    top: 0px;
    right: 0px;
  }

  .btnRandom {
    margin-top: 12px;
    width: 100%;
    max-width: 224px;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      color: #ffd60a;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .svgDice {
      animation: ${rotate} 0.3s linear forwards;
    }
  }
`;

export const ContentCustom = styled(animated.div)`
  position: relative;
  height: 510px;
  display: flex;
  flex-direction: column;
  background-color: #14213d;
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
