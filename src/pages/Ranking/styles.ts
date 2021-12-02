import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 92px 0px;
  padding-right: 24px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    background-color: #14213d;
    border-radius: 4px;
    overflow: hidden;
  }

  th,
  td {
    height: 32px;
    border: 1px solid ${lighten(0.1, '#14213d')};
    text-align: left;
    padding: 8px;
  }

  th {
    border-top: none;
    font-weight: bold;
  }

  tfoot {
    background-color: #4cc9f0;
    color: #14213d;

    td {
      border: none;
      text-align: left;
      padding: 8px;
    }

    .last {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > button {
        background-color: transparent;
        border: none;
        color: #14213d;

        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
`;
