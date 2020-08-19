import React from 'react';

import { ButtonLink } from '../button/Button';
import { ICTA } from './types';
import { TButtonLinkProps } from '../button/types';

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

  // scope button with <div> to prevent button behaves based on a parent container
  return (
    <div>
      <ButtonLink
        data-type="cta-btn"
        tabIndex={0}
        href={url}
        text={text}
        icon={icon}
        isSecondary={isSecondary}
        {...otherProps as TButtonLinkProps}
      />
    </div>
  );
};

export default CTA;
