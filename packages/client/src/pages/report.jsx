import React from 'react';
import styled from 'styled-components';
import { background, color } from '../shared/style';
import Switcher from '../components/layout-components/Switcher';
import Stack from '../components/layout-components/Stack';
import ReportIntro from '../components/report/ReportIntro';
import ReportOverview from '../components/report/ReportOverview';
import ReportDetails from '../components/report/ReportDetails';
import Pagination from '../components/pagination/Pagination';
import { mockReportData } from '../data/reportData';

const LoadedPageContainer = styled(Stack)`
  background-color: ${background.mixedWhite};
  width: 100%;

  & > * + * {
    margin-top: 0;
  }
`;

const Section = styled.section`
  padding: 6rem;

  &:first-child {
    padding-top: 8rem;
  }

  &:last-child {
    padding-top: 0;
  }

  &:nth-child(2) {
    background-color: ${color.extraLightPurple};
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% calc(100% - 4rem));
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% calc(100% - 4rem);
  } 
`;

const LoadingPageContainer = styled(Stack)`
  background-color: ${color.extraLightPurple};

  & > * {
    padding: 3rem;
  }

  & > :not(:first-child) {
    padding-top: 0;
  }

  @media (min-width: 48rem) {
    & > * {
      padding: 6rem;
    }
  }
`;

const BlankTitle = styled.div`
  background-color: ${color.white};
  height: 2rem;
  flex: 0 0 15%;

  &:first-child {
    flex: 0 0 50%;
    margin-right: auto;
  }
`;

const BlankCard = styled.div`
  background-color: ${color.white};
  height: 20rem;
`;

const BlankDetails = styled.div`
  background-color: ${color.white};
  height: 2rem;
  width: inherit;
`;

const ReportPage = () =>
  mockReportData ? (
    <LoadedPageContainer space="large">
      <Section>
        <ReportIntro isLoaded={!!mockReportData} />
      </Section>
      <Section>
        <ReportOverview />
      </Section>
      <Section>
        <ReportDetails />
      </Section>
      <Section>
        <Pagination currentPage={1} totalPages={10} />
      </Section>
    </LoadedPageContainer>
  ) : (
    <LoadingPageContainer>
      <ReportIntro isLoaded={!!mockReportData} />
      <Stack>
        <Switcher threshold="35rem">
          <div>
            <BlankTitle />
            <BlankTitle />
            <BlankTitle />
          </div>
        </Switcher>
        <Switcher threshold="35rem">
          <div>
            <BlankCard />
            <BlankCard />
          </div>
        </Switcher>
        <Stack>
          <BlankDetails />
          <BlankDetails />
          <BlankDetails />
        </Stack>
      </Stack>
    </LoadingPageContainer>
  );

export default ReportPage;
