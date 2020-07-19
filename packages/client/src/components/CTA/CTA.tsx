import React from 'react';

import Button from '../button/Button';
import { ICTA } from './types';

const CTA: React.FC<ICTA> = ({
  text,
  icon,
  url,
  isExternal,
  isSecondary,
  ...otherProps
}) => {
  const externalConfig = {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };

  return (
    <Button
      data-type="cta-btn"
      tabIndex={0}
      as="a"
      href={url}
      text={text}
      icon={icon}
      isSecondary={isSecondary}
      {...otherProps}
    />
  );
};

export default CTA;
