import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  margin: 92px 0px 42px;
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
    height: 42px;
    border: 1px solid ${lighten(0.1, '#14213d')};
    text-align: left;
    padding: 8px;

    font-size: 16px;
    color: #ddd;

    > svg {
      width: 28px;
      height: 28px;
    }

    &:first-child {
      width: 100px;
      vertical-align: middle;
      text-align: center;
    }

    &:last-child {
      width: 150px;
    }

    &:nth-child(2) {
      width: 100px;
    }
  }

  th {
    border-top: none;
    font-weight: bold;
    color: #4cc9f0;
  }

  tfoot {
    background-color: #4cc9f0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow: hidden;

    > td {
      border: none;
      text-align: left;
      padding: 8px;
      color: #14213d;
    }

    .pages {
      max-width: 100px;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      > button {
        background-color: transparent;
        border: none;
        color: #14213d;
        font-weight: bold;

        &:first-child {
          margin-right: 12px;
        }
      }
    }
  }
`;
