import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import DetailsCategory from './DetailsCategory';
import { mockReportData } from '../../common/reportData';

const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

const ReportDetails: React.FC = () => (
  <Stack space="medium">
    <div>
      <h2>Detailed issues</h2>
      <Subtitle>What exactly can be improved?</Subtitle>
    </div>
    {Object.keys(mockReportData).map(
      (category: string): React.ReactElement => (
        <DetailsCategory
          key={category}
          category={category}
          issues={mockReportData[category]}
        />
      )
    )}
  </Stack>
);

export default ReportDetails;
