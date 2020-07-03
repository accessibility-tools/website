import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { color } from "../../shared/style";
import Icon from "../icon/Icon";

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
      content: "";
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

  ${props =>
    props.icon === true &&
    `      
      svg {
        margin-right: 0.5em;
      }
    `}

  ${props =>
    props.isSecondary === true &&
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

const Link = ({ children, icon, isExternal, ...otherProps }) => {
  const externalConfig = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };
  return (
    <StyledLink icon={icon ? true : false} {...otherProps}>
      {icon && <Icon icon={icon} />}
      <span>{children}</span>
    </StyledLink>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
  isExternal: PropTypes.bool,
};

Link.defaultProps = {
  isExternal: false,
};

export default Link;
