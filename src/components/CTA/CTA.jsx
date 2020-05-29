import React from "react";
import PropTypes from "prop-types";
import StyledButton from "../button/Button";

const CTA = ({ text, icon, href, ...otherProps }) => {
  return (
    <StyledButton as="a" href={href} text={text} icon={icon} {...otherProps} />
  );
};

CTA.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isSecondary: PropTypes.bool,
};

export default CTA;
