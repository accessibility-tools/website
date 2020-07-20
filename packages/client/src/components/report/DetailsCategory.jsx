import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stack from '../layout-components/Stack.tsx';
import Badge from '../badge/Badge';
import DetailsCard from './DetailsCard';
import { reportIcons } from '../../constants/reportIcons.ts';

const CategoryContainer = styled(Stack)`
  @media (max-width: 48rem) {
    width: 80vw;
  }
`;

const CategoryBadge = styled(Badge)`
  max-width: fit-content;
`;

const DetailsCategory = ({ category, issues }) => (
  <CategoryContainer space="medium">
    {issues.length > 0 && (
      <>
        <CategoryBadge
          label={category}
          iconName={reportIcons[category].iconName}
          iconColor={reportIcons[category].iconColor}
        />
        {issues.map((issue, index) => (
          <DetailsCard key={`${category} issue ${index}`} issueData={issue} />
        ))}
      </>
    )}
  </CategoryContainer>
);

DetailsCategory.propTypes = {
  category: PropTypes.string,
  issues: PropTypes.array
};

export default DetailsCategory;
