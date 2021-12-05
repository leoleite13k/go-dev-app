import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { animated } from 'react-spring';

interface ILesson {
  current: boolean;
  completed: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 42px 0px 32px;

  max-width: 1281px;

  .header {
    margin-bottom: 24px;

    > h1 {
      color: #4cc9f0;
      font-size: 32px;
      margin-bottom: 4px;
    }

    > span {
      margin-left: 6px;
      color: #ddd;
    }
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  min-height: 500px;
  padding-right: 24px;

  display: flex;
`;

export const CurrentLesson = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  min-width: 400px;
  margin-right: 24px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #14213d;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    padding: 12px 12px;
  }

  .buttons {
    > button {
      position: relative;
      margin-right: 12px;
      color: #ddd;
      height: 32px;
      width: 42px;
      border-radius: 6px;
      overflow: hidden;
      color: #ffc300;
      background-color: ${lighten(0.1, '#14213D')};

      > span {
        position: absolute;
        top: 40%;
        left: 0px;
        right: 0px;
        bottom: 0px;
        font-size: 8px;
      }

      &:first-child {
        > svg {
          transform: scaleX(-1);
        }
      }
    }
  }

  .controlVideo {
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0px;

      > span {
        margin-right: 6px;
      }

      > button {
        margin: 0px;
        background-color: ${lighten(0.1, '#14213D')};
      }
    }

    > button {
      margin-left: 6px;
      color: #ffc300;
      height: 32px;
      width: 52px;
      border-radius: 6px;
      overflow: hidden;
      background-color: ${lighten(0.1, '#14213D')};

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Lessons = styled(animated.div)`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border-radius: 6px;
  overflow: hidden;
  background-color: #14213d;

  .lessons {
    height: 48px;
    padding: 6px;
    background-color: ${lighten(0.1, '#14213D')};

    display: flex;
    align-items: center;

    > h2 {
      margin-left: 8px;
      color: #ddd;
    }
  }
`;

export const Lesson = styled.div<ILesson>`
  height: 62px;
  margin-left: 12px;
  display: flex;
  padding-top: 31px;

  > h4 {
    color: #ddd;
    cursor: pointer;

    &:hover {
      color: #4cc9f0;
    }
  }

  ${({ completed }) =>
    completed &&
    css`
      > h4 {
        color: #04d361;
      }

      .ball {
        background-color: #04d361 !important;
      }

      .line {
        background-color: #04d361 !important;
      }
    `};

  ${({ current }) =>
    current &&
    css`
      > h4 {
        color: #4cc9f0;
      }

      .ball {
        background-color: #4cc9f0 !important;
      }
    `};
`;

export const Status = styled.div`
  position: relative;
  height: 100%;
  margin-right: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .ball {
    width: 14px;
    height: 14px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #ddd;
    cursor: pointer;
    z-index: 2;

    &:hover {
      box-shadow: 0px 0px 4px 2px #ddd;
    }
  }

  .line {
    position: absolute;
    top: 0px;
    left: 6px;
    right: 0px;
    bottom: 0px;
    width: 3px;
    height: 62px;
    background-color: #ddd;
  }
`;

export const Description = styled.div`
  margin-top: 32px;
  margin-right: 24px;

  > h1 {
    color: #ddd;
  }

  > div {
    min-height: 150px;
    height: 100%;
    padding: 12px;
    margin-top: 12px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #14213d;

    > p {
      color: #fff;
    }
  }
`;
