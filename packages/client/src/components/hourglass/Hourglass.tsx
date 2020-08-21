import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { color } from '../../shared/style';


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
  background-color: white;
  border: 3px solid black;
  width: 180px;
  height: 30px;
`;

const BorderTop = styled(Border)`
`;

const BorderBottom = styled(Border)`
  position: relative;
`;

const WatchContainer = styled.div`
  position absolute;
  position absolute;
  right: 23%;
  top: 20%;
  
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const GlassBorder = styled('div')<{ transform?: string; top?: string; left?: string; bottom?: string; right?: string; }>`
  position: absolute;
  top: ${({ top }) => top || ''};
  left: ${({ left }) => left || ''};
  bottom: ${({ bottom }) => bottom || ''};
  right: ${({ right }) => right || ''};
  border: 2px solid black;
  height: calc(50% - 12px);
  width: 1px;
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
  top: 20%;
    
  position: absolute;
  clip-path: polygon(25% 0%, 75% 0%, 55% 45%, 45% 45%);
  background-color: ${color.blue};
`;

const grow = keyframes`
  0%, 10% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
  }
  15%, 25% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(17deg);
  }
  30%, 40% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(11deg);
  }
  45%, 55% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(8deg);
  }
  60%, 70% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(6deg); 
  }
  90%, 100% {
    transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
  }
`;

const SandBottom = styled.div`
  animation: 12s ${grow} ease infinite normal;
  background-color: ${color.blue};
  transform-origin: center bottom 0;
  transform-style: preserve-3D;
  transform: translate3d(-50%,-2%,0) perspective(8px) rotateX(30deg);
  
  height: 100%;
  width: 52%;
  
  position: absolute;
  bottom: 10%;
  left: 50%;
}
`;

const generateKeyframes = (start: number, end: number, transform: string) => {
  return keyframes`
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
};


interface IGrain {
  transform: string;
  start: number;
  end: number;
}

const Grain = styled.div<IGrain>`
  animation: ${(
    { transform, start, end }
  ) => css`12s ${generateKeyframes(start, end, transform)} cubic-bezier(.55,.0,.83,.67) infinite normal` || ''};

  height: 6%;
  width: 10%;
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -150%, 0);
  
  background-color: ${color.blue};
`;

const GRAINS = [
  {
    id: 1,
    start: 4,
    end: 10,
    transform: 'translate3d(-50%, 510%,0)',
  },
  {
    id: 2,
    start: 20,
    end: 25,
    transform: 'translate3d(-50%, 440%,0)'
  },
  {
    id: 3,
    start: 35,
    end: 40,
    transform: 'translate3d(-50%, 380%,0)'
  },
  {
    id: 4,
    start: 50,
    end: 55,
    transform: 'translate3d(-50%, 270%,0)'
  }
];


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
