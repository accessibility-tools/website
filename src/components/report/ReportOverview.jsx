import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import OverviewCard from "./OverviewCard";
import { mockReportData } from "../../data/reportData";

const OverviewContainer = styled(Stack)`
  padding: 0;
  width: 80vw;

  span {
    color: ${color.blue};
  }

  button {
    max-width: initial;
  }

  @media (min-width: 48rem) {
    width: 100%;

    button {
      max-width: max-content;
      align-self: flex-start;
    }
  }
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
          <Button text="Copy URL" />
        </div>
      </Switcher>
      <Switcher threshold="35rem">
        <div>
          <OverviewCard
            title={`${totalIssueCount} Detected issues`}
            subtext="Seems like there are some accesssibility issues on this website that can be improved:"
            isIssue
            reportData={mockReportData}
          />
        </div>
      </Switcher>
      <NoteContainer>
        <Icon icon="manicule" color={color.blue} />
        <p>
          Automated tests like this one can assess up to 30% of accessibilities
          issues. We recommand performing a manual test in addition and test
          with real users.
        </p>
      </NoteContainer>
    </OverviewContainer>
  );
};

export default ReportOverview;
