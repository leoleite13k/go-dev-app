import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px;
`;

export const Card = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 8px;
  padding: 29px;
  border: 2px solid #FFD60A;
  background-color: #000814;
  padding: 18px 48px 72px;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    text-align: center;
    font-size: 48px;
    margin-bottom: 72px;
    color: #FFD60A
  }

  > div {
    width: 100%;
    margin-top: 24px;
  }
`;
