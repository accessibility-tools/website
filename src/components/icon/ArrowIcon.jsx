import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "./Icon";

const handleArrowDirection = direction => {
  switch (direction) {
    case "left":
      return "rotate(90deg)";
    case "right":
      return "rotate(-90deg)";
    case "up":
      return "rotate(180deg)";
    default:
      return;
  }
};
const StyledArrowIcon = styled(Icon)`
  transform: ${props => handleArrowDirection(props.direction)};
`;

const ArrowIcon = ({ iconPath, color, direction }) => (
  <StyledArrowIcon iconPath={iconPath} color={color} direction={direction} />
);

ArrowIcon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  direction: PropTypes.string,
  color: PropTypes.string,
};

export default ArrowIcon;
