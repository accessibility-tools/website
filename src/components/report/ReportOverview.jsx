import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Button from "../button/Button";
import OverviewCard from "./OverviewCard";
import { mockReportData } from "../../data/reportData";

const OverviewContainer = styled(Stack)`
  padding: 0;
  width: 80vw;

  span {
    color: ${color.blue};
  }

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

const ReportOverview = () => {
  const issueCountArr = Object.keys(mockReportData).map(
    category => mockReportData[category].length
  );
  const totalIssueCount = issueCountArr.reduce((a, b) => a + b, 0);
  return (
    <OverviewContainer>
      <Switcher threshold="35rem">
        <div>
          <Stack space="small">
            <h2>
              Report for <span>xxx.com</span>
            </h2>
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
          <OverviewCard
            title={`${totalIssueCount} Detected issues`}
            subtext="Seems like there are some accesssibility issues on this website, that can be improved:"
            isIssue
            reportData={mockReportData}
          />
          <OverviewCard
            title="8 Fulfilled guidlines"
            subtext="Great, seems like your website is compliant with the following accessibility guidelines, that are in place:"
            isGuideline
            reportData={mockReportData}
          />
        </div>
      </Switcher>
    </OverviewContainer>
  );
};

export default ReportOverview;
