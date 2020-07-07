import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

const CTA = ({ ctaData, ...otherProps }) => {
  const { ctaText, ctaIcon, ctaUrl, isExternal, isSecondary } = ctaData;
  const externalConfig = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };

  return (
    <Button
      data-type="cta-btn"
      tabIndex="0"
      as="a"
      href={ctaUrl}
      text={ctaText}
      icon={ctaIcon}
      isSecondary={isSecondary}
      {...otherProps}
    />
  );
};

CTA.propTypes = {
  ctaData: PropTypes.object,
};

CTA.defaultProps = {
  isExternal: false,
};

export default CTA;
