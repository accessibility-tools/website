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

const DetailsCategory: React.FC<IDetailsCategory> = ({ category, issues }) => {
  const categories = [];

  Object.entries(issues).forEach(([key, value]) => {
    categories.push(
      <DetailsCard
        key={`${category} issue ${key}`}
        issueData={value}
      />
    );
  });

  return (
    <CategoryContainer space="medium">
      <CategoryBadge
        label={category}
        name={reportIcons[category].name}
        color={reportIcons[category].color}
      />
      {categories}
    </CategoryContainer>
  );
};

export default DetailsCategory;
