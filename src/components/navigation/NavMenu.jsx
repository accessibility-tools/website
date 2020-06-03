import React, { useState } from "react";
import styled from "styled-components";
import { spacing } from "../../shared/style";
import ArrowIcon from "../icon/ArrowIcon";
import MenuList from "./MenuList";

const MenuLabel = styled.div`
  display: none;
  p {
    padding: ${spacing.padding.small}px;
  }
  @media (max-width: 48rem) {
    display: flex;
    align-items: center;
    margin: auto;
  }
`;

const MenuIcon = styled(ArrowIcon)`
  transform: rotate(180deg);
`;

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuLabel open={open} onClick={() => setOpen(!open)}>
        <p>MENU</p>
        <MenuIcon icon="bArrow" direction="up" />
      </MenuLabel>
      <MenuList open={open} />
    </>
  );
};

export default NavMenu;
