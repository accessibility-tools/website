import React from 'react';
import styled from 'styled-components';

import { background, color, spacing } from '../../shared/style';
import Icon from '../icon/Icon';
import { IButton, IButtonLink, IStyledButton, TButtonLinkProps, TButtonProps } from './types';


const StyledButton = styled.button<TButtonProps & IStyledButton>`
  background-color: ${color.blue};
  color: ${color.white};
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;

  &:hover {
    background-color: ${color.lightBlue};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${color.white}, 0 0 0 7px ${color.darkBlue};
  }

  &:active {
    background-color: ${color.darkBlue};
    box-shadow: inset 0 0 0 2px ${color.blue};
  }

  &:disabled {
    background-color: ${color.disabled};
    color: ${color.white};
    cursor: not-allowed !important;
  }

  ${({ isSecondary }) => !!isSecondary && `
      background-color: ${color.white};
      border: 2px solid ${color.primary};
      color: ${color.primary};

      &:hover {
        background-color: ${background.lightPurple};
      }
      &:active {
        background-color: ${color.purple};
      }
      
      &:disabled {
        background-color: ${color.white};
        border: 2px solid ${color.disabled};
        border-radius: 2px;
        color: ${color.disabled};
        cursor: not-allowed !important;
      }
    `}

  ${({ icon }) => !!icon && `
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg{
      margin-left: 1em;
    }
  `}
`;

const StyledButtonLink = styled.a<TButtonLinkProps & IStyledButton>`
  overflow: hidden;

  display: inline-flex;
  width: auto;
  max-width: 100%;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  position: relative;
  
  background-color: ${color.blue};

  color: ${color.white};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    background-color: ${color.lightBlue};
  }

  &:focus {
    box-shadow: 0 0 0 3px ${color.white}, 0 0 0 7px ${color.darkBlue};
  }

  &:active {
    background-color: ${color.darkBlue};
    box-shadow: inset 0 0 0 2px ${color.blue};
  }

  &:disabled {
    background-color: ${color.disabled};
    color: ${color.white};
    cursor: not-allowed !important;
  }

  ${({ isSecondary }) => !!isSecondary && `
      background-color: ${color.white};
      border: 2px solid ${color.primary};
      color: ${color.primary};

      &:hover {
        background-color: ${background.lightPurple};
      }
      &:active {
        background-color: ${color.purple};
      }
      
      &:disabled {
        background-color: ${color.white};
        border: 2px solid ${color.disabled};
        border-radius: 2px;
        color: ${color.disabled};
        cursor: not-allowed !important;
      }
    `}

  ${({ icon }) => !!icon && `
    svg{
      margin-left: 1em;
    }
  `}
  
  span {
    align-self: center;
    display: inline-flex;
    flex-wrap: nowrap;
    max-width: 100%;
    position: relative;
  }
`;


export const Button: React.FC<IButton> = ({
  text,
  icon,
  ...otherProps
}) => (
  <StyledButton icon={icon} {...otherProps as TButtonProps}>
    {text}
    {icon && <Icon icon={icon} />}
  </StyledButton>
);


export const ButtonLink: React.FC<IButtonLink> = ({
  text,
  icon,
  ...otherProps
}) => (
  <StyledButtonLink icon={icon} {...otherProps as TButtonLinkProps}>
    <span>
      <span>{text}</span>
      <span>{icon && <Icon icon={icon} />}</span>
    </span>
  </StyledButtonLink>
);
