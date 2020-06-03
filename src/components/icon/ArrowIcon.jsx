import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { icons } from "../../shared/icons";
import { Svg } from "./Icon";

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
const ArrowSvg = styled(Svg)`
  transform: ${props => handleArrowDirection(props.direction)};
`;

const ArrowIcon = ({ icon, direction }) => {
  return (
    <ArrowSvg viewBox="0 0 16 16" className="icon" direction={direction}>
      <path d={icons[icon]} />
    </ArrowSvg>
  );
};

ArrowIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  direction: PropTypes.string,
};

export default ArrowIcon;
