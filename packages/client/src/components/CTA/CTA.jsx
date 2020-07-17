import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button/Button';

const CTA = ({ text, icon, url, isExternal, isSecondary, ...otherProps }) => {
  const externalConfig = {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };

  return (
    <Button
      data-type="cta-btn"
      tabIndex="0"
      as="a"
      href={url}
      text={text}
      icon={icon}
      isSecondary={isSecondary}
      {...otherProps}
    />
  );
};

CTA.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
  isExternal: PropTypes.bool,
  isSecondary: PropTypes.bool
};

CTA.defaultProps = {
  isExternal: false
};

export default CTA;
