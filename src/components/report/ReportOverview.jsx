import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
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

const reportData = {
  CRITICAL: {
    iconName: "circle",
    iconColor: color.error,
    issueCount: 3,
  },
  SERIOUS: {
    iconName: "issue",
    iconColor: color.error,
    issueCount: 7,
  },
  MODERATE: {
    iconName: "issue",
    iconColor: color.darkPurple,
    issueCount: 10,
  },
  MINOR: {
    iconName: "issue",
    iconColor: color.primary,
    issueCount: 1,
  },
};

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
        <ReportSummCard
          title="21 Detected issues"
          subtext="Seems like there are some accesssibility issues on this website, that can be improved:"
          isIssue={true}
          reportData={reportData}
        />
        <ReportSummCard
          title="08 Fulfilled guidlines"
          subtext="Great, seems like your website is compliant with the following accessibility guidelines, that are in place:"
          isGuideline={true}
        />
      </div>
    </Switcher>
  </OverviewContainer>
);

export default ReportOverview;
