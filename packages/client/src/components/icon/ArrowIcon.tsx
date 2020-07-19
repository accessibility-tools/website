import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

interface IStyledArrowIcon {
  icon: string;
  color?: string;
  direction?: string;
  expanded?: boolean;
}

const handleArrowDirection = (direction: string) => {
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
  transform: ${({ expanded, direction }) =>
    expanded ? handleArrowDirection : handleArrowDirection(direction)};
`;

const ArrowIcon: React.FC<IStyledArrowIcon> = ({
  icon,
  color,
  direction,
  expanded
}) => (
  <StyledArrowIcon
    icon={icon}
    color={color}
    direction={direction}
    expanded={expanded}
  />
);

export default ArrowIcon;
