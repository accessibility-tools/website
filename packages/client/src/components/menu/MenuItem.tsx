import React from 'react';
import styled from 'styled-components';

import { background, color, spacing } from '../../shared/style';
import { IMenuItem, IStyledListItem } from './types';

const StyledListItem = styled.li<IStyledListItem>`
  box-sizing: border-box;
  position: relative;

  &::after {
    bottom: -2px;
    border-radius: 5px;
    border: 2px solid ${color.primary};
    content: '';
    display: block;
    left: 50%;
    opacity: 0;
    right: 50%;
    position: absolute;
    transition: transform 0.2s ease-out;
    -webkit-transition: transform 0.2s ease-out;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }
  &:hover {
    background-color: ${background.lightPurple};
  }
  &:active {
    background-color: ${color.lightPurple};
  }
  ${({ isSelected }) => isSelected &&
    `
      &::after {
        bottom: 0;
        border-radius: 5px;
        border: 2px solid ${color.primary};
        content:"";
        display: block;
        left: 0;
        opacity: 100%;
        right: 0;
        position: absolute;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    `}
`;

const StyledListItemLink = styled.a`
  color: ${color.primary};
  cursor: pointer;
  display: block;
  padding: ${spacing.padding.medium}px ${spacing.padding.medium}px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  user-select: none;
  white-space: nowrap;
  max-width: none;
`;

const MenuItem: React.FC<IMenuItem> = ({
  href,
  text,
  isSelected = false,
  ...otherProps
}) => (
  <StyledListItem isSelected={isSelected}>
    <StyledListItemLink href={href} {...otherProps}>
      {text}
    </StyledListItemLink>
  </StyledListItem>
);

export default MenuItem;
