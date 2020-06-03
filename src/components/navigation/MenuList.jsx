import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MenuItem from "../menu-item/MenuItem";
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
  & > li {
    display: inline-flex;
  }

  @media (max-width: 48rem) {
    --spacing-nav: 2.5rem;
    flex-flow: column nowrap;
    align-items: center;
    z-index: 999;
    background-color: #ffffff;
    position: fixed;
    top: var(--spacing-nav);
    right: 0;
    height: calc(100% - var(--spacing-nav));
    width: 100vw;
    padding-top: var(--spacing-nav);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
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
