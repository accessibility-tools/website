import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Badge from '../badge/Badge';
import { reportIcons } from '../../constants/reportIcons';
import { IOverviewCard, TImpact } from './types';

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

const OverviewCard: React.FC<IOverviewCard> = ({
  title,
  subtext,
  isIssue,
  issuesPerImpact
}) => (
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
        {Object.keys(issuesPerImpact).map(
          (category): React.ReactElement => {
            const iconData = reportIcons[category as TImpact];

            return (
              <Badge
                key={`issue category: ${category}`}
                label={category}
                issueCount={issuesPerImpact[category as TImpact]}
                iconName={iconData.name}
                iconColor={iconData.color}
              />
            );
          }
        )}
      </IssueContainer>
    )}
  </CardContainer>
);

export default OverviewCard;
