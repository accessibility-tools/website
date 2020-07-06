import React from "react";
import { color } from "../../shared/style";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import ReportIntro from "./ReportIntro";

const PageContainer = styled(Stack)`
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

const ReportLoading = () => (
  <PageContainer>
    <ReportIntro />
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
  </PageContainer>
);

export default ReportLoading;
