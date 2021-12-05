import styled from 'styled-components';
import { animated } from 'react-spring';
import { lighten } from 'polished';

export const Container = styled.div`
  h1 {
    color: #ffd60a;
    font-size: 32px;
  }
`;

export const ContentAchievement = styled.div`
  width: 100%;
  height: 182px;
  padding-right: 24px;
  margin: 92px 0px;
`;

export const HeaderAchievement = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    > button {
      height: 24px;
      width: 24px;
      border-radius: 4px;
      margin-left: 6px;
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
  }
`;

export const AchievementList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow: hidden;

  .achievement {
    flex: 0 0 auto;
    height: 118px;
    width: 118px;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 24px;

    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const ContentTrack = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 24px;
  margin-top: 24px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Track = styled(animated.div)`
  width: 30%;
  height: 232px;
  max-width: 412px;
  min-width: 360px;
  margin-left: 24px;
  margin-bottom: 24px;
  padding: 12px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  background-color: #14213d;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
