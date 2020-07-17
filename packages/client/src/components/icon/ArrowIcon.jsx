import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const handleArrowDirection = direction => {
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
const StyledArrowIcon = styled(Icon)`
  transform: ${({ expanded, direction }) =>
    expanded ? handleArrowDirection : handleArrowDirection(direction)};
`;

const ArrowIcon = ({ icon, color, direction, expanded }) => (
  <StyledArrowIcon
    icon={icon}
    color={color}
    direction={direction}
    expanded={expanded}
  />
);

ArrowIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  direction: PropTypes.string,
  expanded: PropTypes.bool
};

export default ArrowIcon;
