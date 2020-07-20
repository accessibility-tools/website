import React from 'react';
import styled from 'styled-components';

import Stack from '../layout-components/Stack';
import Badge from '../badge/Badge';
import DetailsCard from './DetailsCard';
import { reportIcons } from '../../constants/reportIcons';
import { IDetailsCategory } from './types';

const CategoryContainer = styled(Stack)`
  @media (max-width: 48rem) {
    width: 80vw;
  }
`;

const CategoryBadge = styled(Badge)`
  max-width: fit-content;
`;

const DetailsCategory: React.FC<IDetailsCategory> = ({ category, issues }) => (
  <CategoryContainer space="medium">
    {issues.length > 0 && (
      <>
        <CategoryBadge
          label={category}
          iconName={reportIcons[category].iconName}
          iconColor={reportIcons[category].iconColor}
        />
        {issues.map(
          (issue: any, index: number): React.ReactElement => (
            <DetailsCard key={`${category} issue ${index}`} issueData={issue} />
          )
        )}
      </>
    )}
  </CategoryContainer>
);

export default DetailsCategory;
