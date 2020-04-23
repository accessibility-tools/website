import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { color } from '../../shared/style';
import {Icon} from '../icon/icon';

const StyledLink = styled.a`
  text-decoration: none;
  border-bottom: 2px solid ${color.blue};  
  color: ${color.blue};

  &:visited {
    border-bottom: 2px solid ${color.darkPurple}; 
    color: ${color.darkPurple};
  }

  &:hover {
    border-bottom: 2px solid ${color.lightBlue};  
    color: ${color.lightBlue};
    cursor: pointer;
  }
  &:active {
    border-bottom: 2px solid ${color.darkBlue}; 
    color: ${color.darkBlue};
    cursor: wait;
  }

  ${props =>
    props.isSecondary === true &&`
      border-bottom: none;
      color: ${color.primary};

      &:visited {
        border-bottom: none;
      }
      &:hover { 
        border-bottom: none;
        color: ${color.mediumGrey};
        cursor: pointer;
      }
      &:active {
        border-bottom: none;
        color: ${color.black};
        cursor: wait;
      }
    `
  }

  ${props =>
    props.icon === true &&`
      display: inline-block;
      
      svg{
        margin-right: 0.5em;
        margin-top: -0.2rem;
      }
    `
  }
`

export const Link = ({children, icon, ...props}) => {
  return (
    <StyledLink icon={icon ? true : false}{...props}>
      {icon && <Icon icon={icon}/>}
      {children}
    </StyledLink>
  )
}
