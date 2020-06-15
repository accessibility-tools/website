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
  & > :last-child {
    margin-left: auto;
  }

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
      display: inline;
      text-align: center;
      width: 100%;
      ::after {
        border: none;
      }
    }

    & > :last-child {
      margin-top: auto;
    }
  }
`;

const MenuList = ({ open }) => {
  const [selected, setSelected] = useState(VALUES.TOOLS);
  return (
    <StyledList aria-label="menu list" id="menu-list" open={open}>
      {Object.values(VALUES).map(item => (
        <MenuItem
          key={item}
          value={item}
          onSelect={() => setSelected(item)}
          isSelected={item === selected}
          text={item}
        />
      ))}
      <li>
        <Sponsor />
      </li>
    </StyledList>
  );
};

MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MenuList;
