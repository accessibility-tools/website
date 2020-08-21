import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { color } from '../../shared/style';

interface IGrain {
  transform: string;
  start: number;
  end: number;
}

const ANIMATION_START = 5;
const ANIMATION_SHIFT = 10;
const ANIMATION_TIME = 12;

const GRAINS = [
  {
    id: 1,
    start: ANIMATION_START - 1,
    end: ANIMATION_SHIFT,
    transform: 'translate3d(-50%, 510%,0)',
  },
  {
    id: 2,
    start: ANIMATION_START * 4,
    end: ANIMATION_START * 3 + ANIMATION_SHIFT,
    transform: 'translate3d(-50%, 440%,0)'
  },
  {
    id: 3,
    start: ANIMATION_START * 7,
    end: ANIMATION_START * 6 + ANIMATION_SHIFT,
    transform: 'translate3d(-50%, 380%,0)'
  },
  {
    id: 4,
    start: ANIMATION_START * 10,
    end: ANIMATION_START * 9 + ANIMATION_SHIFT,
    transform: 'translate3d(-50%, 270%,0)'
  }
];

const HourglassContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  
  position: relative;
`;

const LoadingImg = styled.img`
  width: 100%;
  height: 100%;
  top: calc(11rem + (15 - 11) * ((100vw - 300px) / (1600 - 300)));
`;

const Border = styled.div`
  overflow: hidden;
  width: 10rem;
  height: 2rem;
  
  background-color: white;
  border: 3px solid black;
  
  z-index: 2;
`;

const BorderTop = styled(Border)`
`;

const BorderBottom = styled(Border)`
  position: relative;
`;

const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 80%;
  
  position absolute;
  right: 23%;
  top: 20%;  
`;

const GlassBorder = styled('div')<{ transform?: string; top?: string; left?: string; bottom?: string; right?: string; }>`
  position: absolute;
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  bottom: ${({ bottom }) => bottom || ''};
  right: ${({ right }) => right || ''};
  
  height: calc(50% - 12px);
  width: 1px;
  
  border: 2px solid black;
  
  transform: ${({ transform }) => transform || ''};
`;

const GlassContainer = styled.div`
  height: 100%;
  width: 100%
  position: relative;
`;

const Sand = styled.div`
  height: 60%;
  width: 100%;
    
  position: absolute;
  top: 20%;

  clip-path: polygon(25% 0%, 75% 0%, 55% 45%, 45% 45%);
  background-color: ${color.blue};
`;

const grow = keyframes`
  0%, ${ANIMATION_SHIFT}% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
  }
  ${ANIMATION_START * 3}%, ${ANIMATION_START * 3 + ANIMATION_SHIFT}% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(17deg);
  }
  ${ANIMATION_START * 6}%, ${ANIMATION_START * 6 + ANIMATION_SHIFT}% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(11deg);
  }
  ${ANIMATION_START * 9}%, ${ANIMATION_START * 9 + ANIMATION_SHIFT}% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(8deg);
  }
  ${ANIMATION_START * 12}%, ${ANIMATION_START * 12 + ANIMATION_SHIFT}% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(6deg); 
  }
  ${ANIMATION_START * 16}%, 100% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
  }
`;

const SandBottom = styled.div`
  height: 100%;
  width: 52%;
  
  position: absolute;
  bottom: 10%;
  left: 50%;
  
  animation: ${ANIMATION_TIME}s ${grow} ease infinite normal;
  background-color: ${color.blue};
  transform-origin: center bottom 0;
  transform-style: preserve-3D;
  transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
}
`;

const generateKeyframes = (start: number, end: number, transform: string) =>
  keyframes`
    ${start}% {
      transform: translate3d(-50%, -150%,0);
      opacity: 1;
    }
    ${end}% {
      transform: ${transform};
      opacity: 1;
    }
    ${end + 10}% {
      transform: ${transform};
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
`;

const Grain = styled.div<IGrain>`
  animation: ${(
    { transform, start, end }
  ) => css`${ANIMATION_TIME}s ${generateKeyframes(start, end, transform)} cubic-bezier(.55,.0,.83,.67) infinite normal` || ''};

  height: 6%;
  width: 10%;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -150%, 0);
  
  background-color: ${color.blue};
`;

const Hourglass: React.FC = () => (
  <HourglassContainer>
    <LoadingImg
      src="/illustrations/loading-hourglass.svg"
      alt=""
    />
    <WatchContainer>
      <BorderTop/>
      <GlassContainer>
        <GlassBorder
          transform={'rotate(-25deg)'}
          top={'19px'}
          left={'25%'}
        />
        <GlassBorder
          transform={'rotate(25deg)'}
          top={'19px'}
          right={'25%'}
        />
        <GlassBorder
          transform={'rotate(25deg)'}
          bottom={'19px'}
          left={'25%'}
        />
        <GlassBorder
          transform={'rotate(-25deg)'}
          bottom={'19px'}
          right={'25%'}
        />
        <Sand/>
        {
          GRAINS.map(({ transform, id, start, end }) => (
            <Grain
              transform={transform}
              key={id}
              end={end}
              start={start}
            />
          ))
        }
        <SandBottom/>
      </GlassContainer>
      <BorderBottom/>
    </WatchContainer>
  </HourglassContainer>
);

export default Hourglass;
