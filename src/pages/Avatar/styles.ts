import styled, { keyframes } from 'styled-components';

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
`;

export const Content = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 48px;
    color: #ffd60a;
    text-align: center;
    margin-bottom: 24px;
  }

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
