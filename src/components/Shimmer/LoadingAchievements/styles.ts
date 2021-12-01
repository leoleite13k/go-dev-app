import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;

  .skeleton {
    height: 118px;
    width: 118px;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 24px;
    border-radius: 50%;
  }
`;
