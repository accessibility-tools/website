import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
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
  --spacing-nav: 2rem;
  flex-flow: column nowrap;
  position: fixed;
  top: var(--spacing-nav);
  height: calc(100% - var(--spacing-nav) * 2);
  transform: ${({ open }) => (open ? "translatex(0)" : "translateX(100%)")};

  & > li {
    ::after {
	  border: none
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
    <StyledList open={open}>
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
