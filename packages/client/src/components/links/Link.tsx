import React from 'react';
import styled from 'styled-components';

import { color } from '../../shared/style';
import Icon from '../icon/Icon';
import { ILink } from './types';

export const UnStyledLink = styled.a`
  all: inherit;
`;

const StyledLink = styled.a`
  color: ${color.blue};
  display: flex;
  align-items: baseline;
  text-decoration: none;

  &:focus {
    box-shadow: 0 0 0 4px ${color.darkBlue};
  }
  &:visited {
    color: ${color.darkPurple};
  }
  &:hover {
    color: ${color.lightBlue};
    cursor: pointer;
  }
  &:active {
    color: ${color.darkBlue};
  }

  & > span {
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 0px;
      background-color: currentColor;
      border: 1px solid transparent;
      border-radius: 2px;
      left: 0;
      right: 0;
      bottom: -1px;
      position: absolute;
    }
  }

  ${({ icon }: { icon: boolean }): string | void =>
    icon &&
    `
      svg {
        margin-right: 0.5em;
      }
    `}

  ${({ isSecondary }: { isSecondary: boolean }): string | void =>
    isSecondary &&
    `
      color: ${color.primary};

      & > span {
        &::after {
          opacity: 0;
        }
      }

      &:hover {
        color: ${color.mediumGrey};
        cursor: pointer;
      }
      &:active {
        color: ${color.black};
      }
    `}
`;

const Link: React.FC<ILink> = ({
  text,
  url,
  icon,
  isExternal = false,
  isSecondary,
  children,
  ...otherProps
}) => {
  const externalConfig = {
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  if (isExternal) {
    otherProps = { ...otherProps, ...externalConfig };
  }

  return (
    <StyledLink
      href={url}
      isSecondary={isSecondary}
      icon={icon}
      {...otherProps}
    >
      {icon && <Icon icon={icon} />}
      {text && <span>{text}</span>}
      {children && <span>{children}</span>}
    </StyledLink>
  );
};

export default Link;
