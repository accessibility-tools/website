import React, { useState } from "react";
import styled from "styled-components";
import { spacing } from "../../shared/style";
import MenuItem from "../menu-item/MenuItem";
import Sponsor from "../sponsor/Sponsor";

const VALUES = {
  TOOLS: "the tools",
  LEARN: "learn more",
  ABOUT: "about & contact",
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.padding.medium}px;
`;

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  & > li {
    display: inline-flex;
  }
`;

const Nav = () => {
  const [selected, setSelected] = useState(VALUES.TOOLS);
  return (
    <StyledNav>
      <StyledList>
        {Object.values(VALUES).map(item => (
          <MenuItem
            key={item}
            value={item}
            onSelect={() => setSelected(item)}
            isSelected={item === selected}
            text={item}
          />
        ))}
      </StyledList>
      <Sponsor />
    </StyledNav>
  );
};

export default Nav;
