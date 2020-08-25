import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import Badge from '../badge/Badge';
import DetailsCard from './DetailsCard';
import { reportIcons } from '../../constants/reportIcons';
import { IViolationsById, TImpact } from './types';


interface IDetailsImpact {
  impact: TImpact
  violations: IViolationsById
}

const ImpactContainer = styled(Stack)`
  @media (max-width: 48rem) {
    width: 80vw;
  }
`;

const ImpactBadge = styled(Badge)`
  max-width: fit-content;
`;

const DetailsImpact: React.FC<IDetailsImpact> = ({ impact, violations }) => (
  <ImpactContainer
    space="medium"
    marginTop={'1.6em'}
  >
    <ImpactBadge
      label={impact}
      name={reportIcons[impact].name}
      color={reportIcons[impact].color}
    />
    {
      Object.entries(violations).map(([key, value]) => (
        <DetailsCard
          key={`${impact} issue ${key}`}
          violation={value}
        />
      ))
    }
  </ImpactContainer>
);

export default DetailsImpact;
