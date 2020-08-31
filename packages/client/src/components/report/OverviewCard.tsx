import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Stack from '../layout-components/Stack';
import Icon from '../icon/Icon';
import Badge from '../badge/Badge';
import { reportIcons } from '../../constants/reportIcons';
import { TImpact, TViolationsPerImpact } from './types';


interface IOverviewCard {
  title?: string;
  subtext?: string;
  isViolation?: boolean;
  violationsPerImpact: TViolationsPerImpact
}

const CardContainer = styled.div`
  background-color: ${color.white};
  width: 100%;
  padding: 3rem 2.5rem;
  
  p {
    max-width: 45rem;
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
  margin-top: 1rem;
  
  & > div {
    margin-left: 1rem;
  }
  & > div:first-child {
    margin-left: 0;
  }
`;

const OverviewCard: React.FC<IOverviewCard> = ({
  title,
  subtext,
  isViolation,
  violationsPerImpact
}) => (
  <CardContainer>
    <Title>
      {isViolation ? (
        <Icon
          icon="error"
          color={color.error}
        />
      ) : (
        <Icon
          icon="success"
          color={color.blue}
        />
      )}
      <h3>{title}</h3>
    </Title>
    <p>{subtext}</p>
    {isViolation && (
      <IssueContainer>
        {Object.keys(violationsPerImpact).map(
          (impact): React.ReactElement => {
            const iconData = reportIcons[impact];

            return (
              <Badge
                key={`issue impact: ${impact}`}
                label={impact}
                issueCount={violationsPerImpact[impact as TImpact]}
                name={iconData.name}
                color={iconData.color}
              />
            );
          }
        )}
      </IssueContainer>
    )}
  </CardContainer>
);

export default OverviewCard;
