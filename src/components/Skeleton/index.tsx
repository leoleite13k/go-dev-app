import styled from 'styled-components';
import { lighten } from 'polished';

export default styled.div`
  background-image: linear-gradient(
    -90deg,
    #14213d 0%,
    ${lighten(0.1, '#14213D')} 50%,
    #14213d 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;
  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
  &.white {
    background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
  }
`;
