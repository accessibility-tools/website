import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { background, color, spacing } from '../../shared/style.ts';
import Icon from '../icon/Icon.tsx';

const StyledButton = styled.button`
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

  ${(props) =>
    props.isSecondary &&
    `
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

  ${(props) =>
    !!props.icon &&
    `
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg{
      margin-left: 1em;
    }
  `}
`;

const Button = ({ text, icon, ...otherProps }) => {
  return (
    <StyledButton icon={!!icon} {...otherProps}>
      {text}
      {icon && <Icon icon={icon} />}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isSecondary: PropTypes.bool
};

export default Button;
