import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
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

  .skeleton {
    height: 100%;
    width: 100%;
    padding: 12px;
    overflow: hidden;
    background-color: #14213d;
  }

  th,
  td {
    height: 42px;
    border: 1px solid ${lighten(0.1, '#14213d')};
    text-align: left;
    padding: 8px;

    &:first-child {
      width: 100px;
      vertical-align: middle;
      text-align: center;
    }

    &:last-child {
      width: 150px;
    }
  }

  th {
    border-top: none;
    font-weight: bold;
    color: #4cc9f0;
  }

  tfoot {
    background-color: #4cc9f0;

    > td {
      border: none;
      text-align: left;
      padding: 8px;
      color: #14213d;
    }

    .pages {
      max-width: 100px;
    }
  }
`;
