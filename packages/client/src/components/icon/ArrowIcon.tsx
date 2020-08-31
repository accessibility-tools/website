import React from 'react';
import styled from 'styled-components';

import { IArrowIcon } from './types';
import Icon from './Icon';

const handleArrowDirection = (direction?: string): string => {
  switch (direction) {
    case 'left':
      return 'rotate(90deg)';
    case 'right':
      return 'rotate(-90deg)';
    case 'up':
      return 'rotate(180deg)';
    default:
      return '';
  }
};

const StyledArrowIcon = styled(Icon)<IArrowIcon>`
  transform: ${({ isExpanded, direction }) => (isExpanded ? handleArrowDirection() : handleArrowDirection(direction))};
`;

const ArrowIcon: React.FC<IArrowIcon> = ({
  icon,
  color,
  direction,
  isExpanded
}) => (
  <>
  <StyledArrowIcon
    icon={icon}
    color={color}
    direction={direction}
    isExpanded={isExpanded}
  />
  <span className="visually-hidden">External Link</span>
  </>
);

export default ArrowIcon;
