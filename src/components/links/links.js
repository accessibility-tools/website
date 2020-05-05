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

export const Link = ({children, icon, isExternal, ...props}) => {
  const externalConfig = {
  target: "_blank",
  rel: "noopener noreferrer"
  }
  if(isExternal) props = {...props, ...externalConfig}
  return (
    <StyledLink icon={icon ? true : false} {...props}>
      {icon && <Icon icon={icon}/>}
      {children}
    </StyledLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isExternal: PropTypes.bool,
};

Link.defaultProps = {
  isExternal: false,
};