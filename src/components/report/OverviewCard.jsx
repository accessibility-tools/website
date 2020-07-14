import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Icon from "../icon/Icon";
import Badge from "../badge/Badge";
import Link from "../links/Link";
import { reportIcons } from "../../constants/reportIcons";

const CardContainer = styled(Stack)`
  background-color: ${color.white};
  width: 100%;
  padding: 2rem;
  p {
    max-width: none;
  }

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

const GuidelineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    flex: 1 0 40%;
    padding: 0.5rem;
  }
`;

const OverviewCard = ({ title, subtext, isIssue, isGuideline, reportData }) => (
  <CardContainer>
    <Title>
      {isIssue ? (
        <Icon icon="error" color={color.error} />
      ) : (
        <Icon icon="success" color={color.blue} />
      )}
      <h4>{title}</h4>
    </Title>
    <p>{subtext}</p>
    {isIssue && (
      <IssueContainer>
        {Object.keys(reportData).map(category => {
          const iconData = reportIcons[category];
          return (
            <Badge
              key={`issue category: ${category}`}
              label={category}
              issueCount={reportData[category].length}
              iconName={iconData.iconName}
              iconColor={iconData.iconColor}
            />
          );
        })}
      </IssueContainer>
    )}

    {isGuideline && (
      <GuidelineContainer>
        <Link icon="extLink" text="example link" isExternal={true} />
        <Link icon="extLink" text="example link" isExternal={true} />
        <Link icon="extLink" text="example link" isExternal={true} />
        <Link icon="extLink" text="example link" isExternal={true} />
        <Link icon="extLink" text="example link" isExternal={true} />
        <Link icon="extLink" text="example link" isExternal={true} />
      </GuidelineContainer>
    )}
  </CardContainer>
);

OverviewCard.propTypes = {
  title: PropTypes.string,
  subtext: PropTypes.string,
  isIssue: PropTypes.bool,
  isGuideline: PropTypes.bool,
  reportData: PropTypes.object,
};

export default OverviewCard;
