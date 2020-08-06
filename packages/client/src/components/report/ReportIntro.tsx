import React from 'react';
import styled from 'styled-components';

import Switcher from '../layout-components/Switcher';
import { IReportIntro } from './types';

const ReportImg = styled.img`
  width: 19rem;
  height: 21rem;
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

const ReportIntro: React.FC<IReportIntro> = ({ isLoading }) => (
  <Switcher>
    {isLoading ? (
      <div>
        <ReportImg
          src="/illustrations/web-checker.svg"
          alt="illustration of report page"
        />
        <Title>
          <p>creating reports for big pages can take a long time</p>
          <h1>Please give us a minute...</h1>
        </Title>
      </div>
    ) : (
      <div>
        <ReportImg
          src="/illustrations/web-checker.svg"
          alt="illustration of report page"
        />
        <Title>
          <p>web accessibility report</p>
          <h1>Thanks for Making the web accessible for everybody</h1>
        </Title>
      </div>
    )}
  </Switcher>
);

export default ReportIntro;
