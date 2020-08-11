import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import DetailsImpact from './DetailsImpact';
import { TImpact, TViolationsByImpact } from './types';


interface IReportDetails {
  violationsByImpact: TViolationsByImpact;
}

const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

const ReportDetails: React.FC<IReportDetails> = ({ violationsByImpact }) => (
  <Stack space="medium">
    <div>
      <h2>Detailed issues</h2>
      <Subtitle>What exactly can be improved?</Subtitle>
    </div>
    {
      Object.entries(violationsByImpact).map(([key, value]) =>
        <DetailsImpact
          key={key}
          impact={key as TImpact}
          violations={value}
        />
      )
    }
  </Stack>
);

export default ReportDetails;
