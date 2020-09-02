import React from 'react';
import styled from 'styled-components';

import Switcher from '../layout-components/Switcher';
import Hourglass from '../hourglass/Hourglass';
import Center from '../layout-components/Center';

interface IReportIntro {
  isLoading?: boolean;
}

const ReportImg = styled.img`
  width: 80%
  transform: scaleX(1);
`;

const Title = styled.div`
  flex: 2;
  align-self: center;
  p {
    max-width: none;
    text-transform: uppercase;
    letter-spacing: 2.25px;
    font-weight: 500;
  }
`;

const HourglassContainer = styled.div`
  width: 19rem;
  height: 21rem;
`;

const ReportIntroWrapper = styled(Switcher)`
  width: 100%;

  & > * > * :last-child {
    flex-grow: 3;
  }

  p {
    text-align: center;
    font-weight: 500;
    letter-spacing: 2.25px;
  }

  @media (min-width: 43rem) {
    h1,
    p {
      text-align: left;
      margin-right: auto;
    }
  }
  @media (max-width: 800px) {
    h1,
    p {
      text-align: center;
      margin-right: auto;
    }
  }
`;

const ReportIntro: React.FC<IReportIntro> = ({ isLoading }) => (
  <ReportIntroWrapper threshold="40rem">
    <div>
      {isLoading ? (
        <>
          <Center>
            <HourglassContainer>
              <Hourglass />
            </HourglassContainer>
          </Center>
          <Center>
            <Title>
              <p>creating reports for big pages can take a long time</p>
              <h1>Please give us a minute...</h1>
            </Title>
          </Center>
        </>
    ) : (
      <>
        <Center>
          <ReportImg
            src="/illustrations/signup-img.png"
            alt="illustration of report page"
          />
        </Center>
        <Center>
          <Title>
            <p>web accessibility report</p>
            <h1>Thanks for Making the web accessible for everybody</h1>
          </Title>
        </Center>
      </>
    )}
    </div>
  </ReportIntroWrapper>
);

export default ReportIntro;
