import React from "react";
import PropTypes from "prop-types";
import StyledButton from "../button/Button";

const CTA = ({ text, icon, href, isExternal, ...otherProps }) => {
  const externalConfig = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };
  return (
    <StyledButton as="a" href={href} text={text} icon={icon} {...otherProps} />
  );
};

CTA.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isSecondary: PropTypes.bool,
  isExternal: PropTypes.bool,
};

CTA.defaultProps = {
  isExternal: false,
};

export default CTA;
