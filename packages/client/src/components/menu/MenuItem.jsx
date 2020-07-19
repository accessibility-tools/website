import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';
import { background, color, spacing } from '../../shared/style.ts';

const ListItem = styled.li`
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
  ${({ isSelected }) =>
    isSelected === true &&
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

const ListItemLink = styled.a`
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

const MenuItem = ({ href, text, isSelected, ...otherProps }) => (
  <ListItem isSelected={isSelected}>
    <ListItemLink href={href} {...otherProps}>
      {text}
    </ListItemLink>
  </ListItem>
);

MenuItem.propTypes = {
  text: PropType.string.isRequired,
  href: PropType.string,
  isSelected: PropType.bool
};

export default MenuItem;
