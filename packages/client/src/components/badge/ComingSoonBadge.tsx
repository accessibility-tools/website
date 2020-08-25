import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Badge from './Badge';
import { IBadge } from './types';

const StyledBadge = styled(Badge)<IBadge>`
  width: 10.5rem;
  border: 2px solid ${color.blue};
  color: ${color.blue};
  font-size: 1rem;
`;

const ComingSoonBadge: React.FC = () => {
  return (
    <StyledBadge
      label="Coming Soon"
      name="manicule"
      color={color.blue}
    />
  );
};

export default ComingSoonBadge;
