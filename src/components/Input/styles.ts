import styled from 'styled-components';

type TInput = {
  hasError: boolean;
};

export const Container = styled.div`
  width: 100%;
  margin-bottom: 12px;

  > span {
    color: #f00;
  }
`;

export const Content = styled.div<TInput>`
  width: 100%;
  margin-bottom: 6px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ hasError }) => (hasError ? '#f00' : 'transparent')};

  > input {
    width: 100%;
    border: none;
    color: #dddddd;
    font-size: 18px;
    padding: 12px 8px;
    background-color: #14213d;
  }
`;
