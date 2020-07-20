import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from '../../shared/style.ts';
import Stack from '../layout-components/Stack.tsx';
import { Icon } from '../icon/Icon.tsx';
import Badge from '../badge/Badge';
import { reportIcons } from '../../constants/reportIcons.ts';

const CardContainer = styled(Stack)`
  background-color: ${color.white};
  width: 100%;
  padding: 2rem;
  p {
    max-width: 40rem;
  }

  @media (min-width: 48rem) {
    width: 40vw;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 1rem;
  }
`;

const IssueContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    margin: 0.5rem;
  }
`;

const OverviewCard = ({ title, subtext, isIssue, reportData }) => (
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
        {Object.keys(reportData).map((category) => {
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
  </CardContainer>
);

OverviewCard.propTypes = {
  title: PropTypes.string,
  subtext: PropTypes.string,
  isIssue: PropTypes.bool,
  reportData: PropTypes.object
};

export default OverviewCard;
