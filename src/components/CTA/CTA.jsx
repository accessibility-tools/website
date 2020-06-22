import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";

const CTA = ({ text, icon, href, isExternal, isSecondary, ...otherProps }) => {
  const externalConfig = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };

  useEffect(() => {
    document.onkeydown = e => {
      e.keyCode === 13 &&
        (!isSecondary
          ? e.target.classList.add("key-press-alt")
          : e.target.classList.add("key-press"));
    };

    document.onkeyup = e => {
      e.keyCode === 13 &&
        (!isSecondary
          ? e.target.classList.remove("key-press-alt")
          : e.target.classList.remove("key-press"));
    };

    return () => {
      document.onkeydown = null;
      document.onkeyup = null;
    };
  }, [isSecondary]);

  return (
    <Button
      tabIndex="0"
      as="a"
      href={href}
      text={text}
      icon={icon}
      isSecondary={isSecondary}
      {...otherProps}
    />
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
