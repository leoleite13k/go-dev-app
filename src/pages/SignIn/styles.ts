import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px;
`;

export const Card = styled.form`
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  padding: 29px;
  border: 2px solid #ffd60a;
  background-color: #000814;
  padding: 18px 48px 52px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: 48px;
    margin-top: 12px;
    margin-bottom: 52px;
    color: #ffd60a;
  }

  > span {
    text-align: left;
    align-self: flex-start;
    color: #ffd60a;
    cursor: pointer;
    transition: color 1.5s;

    &:hover {
      color: ${lighten(0.16, '#FFC300')};
    }
  }
`;

export const ContentButton = styled.div`
  width: 100%;
  margin-top: 24px;
`;
