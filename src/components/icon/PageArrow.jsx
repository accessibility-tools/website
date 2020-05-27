import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { icons } from "../../shared/icons";
import { Svg } from "./Icon";

const ArrowSvg = styled(Svg)`
  transform: ${(props) =>
    props.direction === "left" ? "rotate(90deg)" : "rotate(-90deg)"};
`;

const PageArrow = ({ icon, direction }) => {
  return (
    <ArrowSvg viewBox="0 0 16 16" className="icon" direction={direction}>
      <path d={icons[icon]} />
    </ArrowSvg>
  );
};

PageArrow.propTypes = {
  icon: PropTypes.string.isRequired,
  direction: PropTypes.string,
  disabled: PropTypes.bool,
};

export default PageArrow;
