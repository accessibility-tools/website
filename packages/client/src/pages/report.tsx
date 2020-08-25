import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { background, color } from '../shared/style';
import Stack from '../components/layout-components/Stack';
import ReportIntro from '../components/report/ReportIntro';
import ReportOverview from '../components/report/ReportOverview';
import ReportDetails from '../components/report/ReportDetails';
// import Pagination from '../components/pagination/Pagination';
import { useServices } from '../common/services';
import { LoadingPage } from '../components/loading-page/loadingPage';
import SEO from '../components/SEO/SEO';
import { IReport } from '../components/report/types';

interface IReportPageQuery {
  url?: string;
  pageLimit?: number;
}

const LoadedPageContainer = styled(Stack)`
  background-color: ${background.mixedWhite};
  width: 100%;

  & > * + * {
    margin-top: 0;
  }
`;

const Section = styled.section`
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  &:first-child {
    padding-top: 8rem;
  }

  &:last-child {
    padding-top: 3rem;
  }

  &:nth-child(2) {
    padding-bottom: 6rem;
    background-color: ${color.extraLightPurple};
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
    -webkit-clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 4rem), 0% 100%);
  } 
  
  & > div {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
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

/**
 * @function mapReportForUI
 * @description Takes report with a type IReportResponse and returns report for UI with a type IReport
 * @description NOTE: Currently types are the same, adjust if needed
 * @param {IReport} report
 * @returns {IReport} Returns report
 */
const mapReportForUI = (report: IReport): IReport => {
  const { pageUrls, violationsByImpact, violationsPerImpact } = report;

  return {
    pageUrls,
    violationsPerImpact,
    violationsByImpact
  };
};

const ReportPage: React.FC = () => {
  const router = useRouter();
  const { apiClient: apiClientService } = useServices();

  const [report, setReport] = useState<IReport | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { url, pageLimit }: IReportPageQuery = router.query;

  const fetchReport = async (url: string) => {
    setIsFetching(true);

    try {
      const { report } = await apiClientService.getReport(url, pageLimit);
      const mappedReport = mapReportForUI(report);
      setReport(mappedReport || null);
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
      <SEO siteTitle="Accessibility report"/>
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
            <ReportIntro isLoading={isFetching}/>
            <LoadingPage/>
          </LoadingPageContainer>
        )
      }
      {
        !isFetching && !error && report && (
          <LoadedPageContainer space="large">
            <Section>
              <ReportIntro isLoading={isFetching}/>
            </Section>
            <Section>
              <ReportOverview
                pagesScanned={report.pageUrls}
                violationsPerImpact={report.violationsPerImpact}
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
