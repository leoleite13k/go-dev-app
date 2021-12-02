import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 52px 0px;
  margin-left: 86px;

  .item {
    height: 224px;
    width: 224px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #14213d;
    padding: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  .item {
    .startIcon {
      transform: scaleX(-1) rotate(180deg);
    }

    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const ContentInfo = styled.div`
  position: relative;
  height: 86px;

  .line {
    width: 4px;
    height: 86px;
    background-color: #ff0;
  }
`;

export const Info = styled.div`
  position: absolute;
  top: 50%;
  left: 0px;

  display: flex;
  align-items: center;

  .lineHorizontal {
    width: 112px;
    height: 4px;
    background-color: #ff0;
  }
`;

export const BoxInfo = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  .info {
    position: absolute;
    left: 0px;
    width: 212px;
    padding: 12px;
    background-color: #14213d;
    border-radius: 6px;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    > h4 {
      text-align: center;
      font-weight: bold;
      font-size: 16px;
    }

    > p {
      margin-top: 6px;
      font-size: 15px;
    }

    > span {
      margin-top: 6px;
      text-align: right;
      font-size: 12px;
    }
  }
`;
