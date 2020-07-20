import React from 'react';
import styled from 'styled-components';

import Icon from './Icon';
import { IStyledArrowIcon } from './types';

const handleArrowDirection = (direction: string): void | string => {
  switch (direction) {
    case 'left':
      return 'rotate(90deg)';
    case 'right':
      return 'rotate(-90deg)';
    case 'up':
      return 'rotate(180deg)';
    default:
      return;
  }
};

const StyledArrowIcon = styled(Icon)<IStyledArrowIcon>`
  transform: ${({
    isExpanded,
    direction
  }: {
    isExpanded: boolean;
    direction: string;
  }) => (isExpanded ? handleArrowDirection : handleArrowDirection(direction))};
`;

const ArrowIcon: React.FC<IStyledArrowIcon> = ({
  icon,
  color,
  direction,
  isExpanded
}) => (
  <StyledArrowIcon
    icon={icon}
    color={color}
    direction={direction}
    isExpanded={isExpanded}
  />
);

export default ArrowIcon;
