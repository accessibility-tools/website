import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../../shared/style";
import MenuItem from "./MenuItem";
import Sponsor from "../sponsor/Sponsor";

const VALUES = {
  TOOLS: "the tools",
  LEARN: "learn more",
  ABOUT: "about & contact",
};

const StyledList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 48rem) {
    flex-flow: column nowrap;
    border-top: 2px solid ${color.primary};
    position: fixed;
    top: 4.5rem;
    bottom: 0;

    ${({ open }) =>
      open
        ? `& {
          opacity: 1;
          transition: opacity 200ms 0ms;
        }`
        : `& { 
          opacity: 0;
          transition: opacity 200ms 0ms;
        }`};

    & > li {
      width: 100%;
      ::after {
        border: none;
      }
    }
  }
`;

const StyledLogo = styled(Sponsor)`
  align-items: center;
  margin-left: auto;

  @media (max-width: 48rem) {
    margin-top: auto;
    margin-left: inherit;
  }
`;

const MenuList = ({ open }) => {
  const [selected, setSelected] = useState(VALUES.TOOLS);
  return (
    <StyledList aria-label="menu list" open={open}>
      {Object.values(VALUES).map(item => (
        <MenuItem
          key={item}
          value={item}
          onSelect={() => setSelected(item)}
          isSelected={item === selected}
          text={item}
        />
      ))}
      <StyledLogo />
    </StyledList>
  );
};

MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MenuList;
