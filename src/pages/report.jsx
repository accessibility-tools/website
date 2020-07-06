import React from "react";
import styled from "styled-components";
import { background, color } from "../shared/style";
import Stack from "../components/layout-components/Stack";
import ReportIntro from "../components/report/ReportIntro";
import ReportOverview from "../components/report/ReportOverview";
import ReportDetails from "../components/report/ReportDetails";
import Pagination from "../components/pagination/Pagination";
import ReportLoading from "../components/report/ReportLoading";

const PageContainer = styled(Stack)`
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

const ReportPage = () => (
  <>
    <ReportLoading />
    <PageContainer space="large">
      <Section>
        <ReportIntro isLoaded={true} />
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
    </PageContainer>
  </>
);

export default ReportPage;
