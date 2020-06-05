import React, { useState } from "react";
import styled from "styled-components";
import { spacing, color } from "../../shared/style";
import { stackStyles } from "../layout-components/Stack";
import MenuLabel from "../menu/MenuLabel";
import MenuList from "../menu/MenuList";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.padding.medium}px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${color.white};
  z-index: 999;
  & > * {
    align-items: center;
  }

  @media (max-width: 48rem) {
    ${stackStyles};
    & > * {
      background-color: inherit;
    }
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer aria-label="navagation menu">
      <MenuLabel open={open} toggleOpen={() => setOpen(!open)} />
      <MenuList open={open} />
    </NavContainer>
  );
};
export default Nav;
