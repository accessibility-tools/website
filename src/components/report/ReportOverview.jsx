import React from "react";
import styled from "styled-components";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Button from "../button/Button";
import ReportSummCard from "./ReportSummCard";

const OverviewContainer = styled(Stack)`
  padding: 0;
  width: 80vw;

  @media (min-width: 48rem) {
    width: 100%;
  }
`;

const BtnWrapper = styled(Switcher)`
  & > * {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    justify-content: center;
  }

  & > * > * {
    margin-left: 1rem;
    max-width: fit-content;
  }

  @media (min-width: 48rem) {
    & > * {
      justify-content: flex-end;
    }
  }
`;

const ReportOverview = () => (
  <OverviewContainer>
    <Switcher threshold="35rem">
      <div>
        <Stack space="small">
          <h2>Report for wwww.com </h2>
          <p>xx pages scanned </p>
        </Stack>
        <BtnWrapper>
          <div>
            <Button text="Export as pdf" isSecondary={true} />
            <Button text="Copy URL" />
          </div>
        </BtnWrapper>
      </div>
    </Switcher>
    <Switcher threshold="35rem">
      <div>
        <ReportSummCard />
        <ReportSummCard />
      </div>
    </Switcher>
  </OverviewContainer>
);

export default ReportOverview;
