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
  <CategoryContainer
    space="medium"
    marginTop={'1.6em'}
  >
    <CategoryBadge
      label={category}
      name={reportIcons[category].name}
      color={reportIcons[category].color}
    />
    {
      Object.entries(issues).map(([key, value]) => (
        <DetailsCard
          key={`${category} issue ${key}`}
          issueData={value}
        />
      ))
    }
  </CategoryContainer>
);

export default DetailsCategory;
