import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import DetailsCategory from './DetailsCategory';

const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

interface IReportDetails {
  violationsByImpact: any
}

const ReportDetails: React.FC<IReportDetails> = ({ violationsByImpact }) => {
  const details: React.ReactElement[] = [];

  Object.entries(violationsByImpact).forEach(([key, value]) => {
    details.push(
      <DetailsCategory
        key={key}
        category={key}
        issues={value}
      />
    );
  });

  return (
    <Stack space="medium">
      <div>
        <h2>Detailed issues</h2>
        <Subtitle>What exactly can be improved?</Subtitle>
      </div>
      {details}
    </Stack>
  );
};

export default ReportDetails;
