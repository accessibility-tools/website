import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { background, color, spacing } from '../../shared/style';
import {Icon} from '../icon/icon';

const StyledList = styled.li`
  background-color: ${color.white};
  box-sizing: border-box;
  margin: 4px;
  padding: ${spacing.padding.medium}px ${spacing.padding.medium}px;
  position: relative;

  &::after {
    bottom: -2px;
    border-radius: 5px;
    border: 2px solid ${color.primary};
    content:"";
    display: block;
    left: 50%;
    opacity: 0;
    right: 50%;
    position: absolute;
    transition: transform .2s ease-out; 
    -webkit-transition: transform .2s ease-out;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  &:focus-within {
    border: 4px solid ${color.darkBlue};
    border-radius: ${spacing.borderRadius.medium}px;
    margin: 0;
    outline: none;
  }

  &:hover {
    background-color: ${background.lightPurple};
  }

  &:active {
    background-color: ${color.purple};
  }

  ${props => 
    props.isSelected === true && `
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
    `
  }
`

const StyledMenuItem = styled.a`
  color: ${color.primary};
  cursor: pointer;
  display: inline-block;
  margin: 0; 
  opacity: 1;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0,0,0);
  vertical-align: top;
  user-select: none;
  white-space: nowrap;

  &:focus {
    outline: none; 
  }
`

export const MenuItem = ({children, icon, ...props}) => {
  return (
    <StyledList {...props}>    
      <StyledMenuItem href="#" onClick={props.onSelect} icon={icon ? true : false}{...props}>
        {children}
        {icon && <Icon icon={icon}/>}
      </StyledMenuItem>
    </StyledList>
  ) 
}