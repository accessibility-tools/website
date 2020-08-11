import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { background, color } from '../shared/style';
import Stack from '../components/layout-components/Stack';
import ReportIntro from '../components/report/ReportIntro';
import ReportOverview from '../components/report/ReportOverview';
import ReportDetails from '../components/report/ReportDetails';
import Pagination from '../components/pagination/Pagination';
import { useServices } from '../common/services';
import { LoadingPage } from '../components/loading-page/loadingPage';

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
    // clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% calc(100% - 4rem));
    // -webkit-clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% calc(100% - 4rem);
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

interface IReportPageQuery {
  url?: string;
  pageLimit?: number;
}

const ReportPage: React.FC = () => {
  const router = useRouter();
  const { apiClient: apiClientService } = useServices();

  const [report, setReport] = useState<any>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { url, pageLimit }: IReportPageQuery = router.query;

  const fetchReport = async (url: string) => {
    setIsFetching(true);

    try {
      const { report } = await apiClientService.getReport(url, pageLimit);
      setReport(report || null);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (!url) {
      router.push('/checker');
    } else {
      fetchReport(url);
    }
  }, []);

  return (
    <>
      {
        !isFetching && error && (
          <LoadedPageContainer space="large">
            <Section>
              <div>Error</div>
            </Section>
          </LoadedPageContainer>
        )
      }
      {
        isFetching && !error && (
          <LoadingPageContainer>
            <ReportIntro isLoading={isFetching} />
            <LoadingPage />
          </LoadingPageContainer>
        )
      }
      {
        !isFetching && !error && report && (
          <LoadedPageContainer space="large">
            <Section>
              <ReportIntro isLoading={isFetching} />
            </Section>
            <Section>
              <ReportOverview
                pagesScanned={report.pageUrls}
                issuesPerImpact={report.issuesPerImpact}
                websiteUrl={url || ''}
              />
            </Section>
            <Section>
              <ReportDetails
                violationsByImpact={report.violationsByImpact}
              />
            </Section>
            {/* TODO: implement pagination */}
            {/*<Section>*/}
            {/*  <Pagination currentPage={1} totalPages={10} />*/}
            {/*</Section>*/}
          </LoadedPageContainer>
        ) 
      }
    </>
  );
};

export default ReportPage;
