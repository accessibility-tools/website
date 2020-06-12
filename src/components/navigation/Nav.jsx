import React, { useState } from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import MenuLabel from "../menu/MenuLabel";
import MenuList from "../menu/MenuList";
import Switcher from "../layout-components/Switcher";

const NavContainer = styled(Switcher)`
  & > * > * {
    background-color: ${color.white};
    z-index: 999;
    align-items: center;
  }
`;

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavContainer aria-label="main navigation" space="0">
      <div>
        <MenuLabel open={open} toggleOpen={() => setOpen(!open)} />
        <MenuList open={open} />
      </div>
    </NavContainer>
  );
};
export default Nav;
