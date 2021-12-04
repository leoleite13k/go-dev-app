import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 52px 0px;
  margin-left: 86px;

  .skeleton {
    height: 224px;
    width: 224px;
    border-radius: 50%;
    overflow: hidden;
    padding: 12px;
    overflow: hidden;
    background-color: #14213d;
  }
`;

export const Content = styled.div`
  height: 100%;
  max-width: 224px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .line {
    width: 4px;
    height: 86px;
    background-color: #ff0;
  }
`;
