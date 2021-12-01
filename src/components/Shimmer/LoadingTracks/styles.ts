import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 24px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  .skeleton {
    width: 30%;
    height: 232px;
    min-width: 360px;
    margin-left: 24px;
    margin-bottom: 24px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #14213d;
  }
`;
