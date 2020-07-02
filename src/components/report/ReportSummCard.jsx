import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Icon from "../icon/Icon";
import Badge from "../badge/Badge";

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

const CardContainer = styled(Stack)`
  background-color: ${color.white};
  width: 100%;
  padding: 2rem;

  @media (min-width: 48rem) {
    width: 40vw;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-right: 1rem;
  }
`;

const IssueContainer = styled(Stack)`
  & > * {
    width: fit-content;
    justify-content: flex-start;
  }

  & > * + * {
    margin-top: 1rem;
  }
`;

const ReportSummCard = () => (
  <CardContainer>
    <Title>
      <Icon icon="error" color={color.error} />
      <h4>21 Detected issues</h4>
    </Title>
    <p>
      Seems like there are some accesssibility issues on this website, that can
      be improved:
    </p>
    <IssueContainer>
      {Object.keys(reportData).map((level, index) => {
        const details = Object.keys(reportData).map(key => reportData[key]);
        return (
          <Badge
            key={`issue level: ${level}`}
            label={level}
            issueCount={details[index].issueCount}
            iconName={details[index].iconName}
            iconColor={details[index].iconColor}
          />
        );
      })}
    </IssueContainer>
  </CardContainer>
);

export default ReportSummCard;
