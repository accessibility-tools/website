import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import MenuList from "./MenuList";

const MenuLabel = styled.div`
  display: none;
  @media (max-width: 48rem) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: auto;
  }
`;

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuLabel open={open} onClick={() => setOpen(!open)}>
        <span>MENU</span>
        <Icon icon="bArrow" />
      </MenuLabel>
      <MenuList open={open} />
    </>
  );
};

export default NavMenu;
