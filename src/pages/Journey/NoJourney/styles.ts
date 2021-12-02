import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 68px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > span {
    margin: 12px 0px 32px;
    font-size: 16px;
  }

  .contentButton {
    width: 100%;
    max-width: 322px;

    .text {
      flex: 3;
    }
  }
`;
