import React from 'react';
import styled from 'styled-components';
import { color } from '../../shared/style.ts';
import Switcher from '../layout-components/Switcher';
import Stack from '../layout-components/Stack';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import OverviewCard from './OverviewCard';
import { mockReportData } from '../../data/reportData.ts';

const OverviewContainer = styled(Stack)`
  padding: 0;
  width: 80vw;

  span {
    color: ${color.blue};
  }

  button {
    height: 3rem;
  }

  @media (min-width: 48rem) {
    width: 100%;
  }
`;

const TitleContainer = styled(Stack)`
  flex: 5;
`;

const Subtitle = styled.p`
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
`;

const NoteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 2rem;

  p {
    max-width: 36rem;
    margin: 0 1rem;
  }
`;

const ReportOverview = () => {
  const issueCountArr = Object.keys(mockReportData).map(
    (category) => mockReportData[category].length
  );
  const totalIssueCount = issueCountArr.reduce((a, b) => a + b, 0);
  return (
    <OverviewContainer>
      <Switcher threshold="35rem">
        <div>
          <TitleContainer space="small">
            <h2>
              Report for <span>xxx.com</span>
            </h2>
            <Subtitle>xx pages scanned</Subtitle>
          </TitleContainer>
          <Button text="Copy URL" />
        </div>
      </Switcher>
      <Switcher threshold="35rem">
        <div>
          <OverviewCard
            title={`${totalIssueCount} Detected issues`}
            subtext="Seems like there are some accessibility issues on this website to improve.
            Some are more critical than others to enable access for all users."
            isIssue
            reportData={mockReportData}
          />
        </div>
      </Switcher>
      <NoteContainer>
        <Icon icon="manicule" color={color.blue} />
        <p>
          Automated tests like this one can assess up to <strong>30%</strong> of
          accessibility issues. In addition, we recommend performing a manual
          test and testing with real users.
        </p>
      </NoteContainer>
    </OverviewContainer>
  );
};

export default ReportOverview;
