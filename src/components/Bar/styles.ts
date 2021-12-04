import styled from 'styled-components';
import { lighten } from 'polished';
import { animated } from 'react-spring';

export const Container = styled.div`
  position: fixed;
  right: 0px;
  top: -12px;
  width: 136px;
  height: 100%;
  background-color: #000814;
  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    margin-top: 6px;
    font-size: 16px;
  }
`;

export const ContentAvatar = styled.div`
  height: 154px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContentTracks = styled.div`
  position: relative;
  width: 100%;
  height: 64%;
  min-height: 224px;
  margin: 24px 0px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  overflow: hidden;
  background-color: #14213d;

  > button {
    position: sticky;
    width: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    height: 18px;
    transition: background-color 0.5s;
    background-color: #14213d;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      color: #ffd60a;
    }

    &:hover {
      background-color: ${lighten(0.1, '#14213D')};
    }
  }
`;

export const Track = styled.div`
  width: 100%;
  height: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;

  cursor: pointer;

  > img {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }

  .percent {
    position: relative;
    width: 80%;
    height: 16px;
    border-radius: 24px;
    overflow: hidden;
    text-align: center;
    background-color: #c4c4c4;

    > span {
      position: absolute;
      top: 1px;
      bottom: 0px;
      left: 8px;
      right: 0px;
      font-weight: 500;
      font-size: 12px;
      color: #000814;
      z-index: 2;
    }
  }
`;

export const Percent = styled(animated.div)`
  height: 16px;
  border-radius: 24px;
  overflow: hidden;
  background-color: #ffc300;
`;
