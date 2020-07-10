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

  ${({ withIcon }) =>
    withIcon === true &&
    `      
      svg {
        margin-right: 0.5em;
      }
    `}

  ${({ isSecondary }) =>
    isSecondary === true &&
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

const Link = ({
  linkText,
  linkUrl,
  linkIcon,
  isExternal,
  isSecondary,
  children,
  ...otherProps
}) => {
  const externalConfig = {
    target: "_blank",
    rel: "noopener noreferrer",
  };
  if (isExternal) otherProps = { ...otherProps, ...externalConfig };
  return (
    <StyledLink
      href={linkUrl}
      isSecondary={isSecondary}
      withIcon={linkIcon && true}
      {...otherProps}
    >
      {linkIcon && <Icon icon={linkIcon} />}
      {linkText && <span>{linkText}</span>}
      {children && <span>{children}</span>}
    </StyledLink>
  );
};

Link.propTypes = {
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  linkIcon: PropTypes.string,
  isExternal: PropTypes.bool,
  isSecondary: PropTypes.bool,
  children: PropTypes.any,
};

Link.defaultProps = {
  isExternal: false,
};

export default Link;
