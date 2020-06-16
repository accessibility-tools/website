import React, { useState, useEffect } from "react";
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
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    document.onkeydown = e => {
      e.keyCode === 13 && e.target.classList.add("key-press");
    };

    document.onkeyup = e => {
      e.keyCode === 13 && e.target.classList.remove("key-press");
    };

    return () => {
      document.onkeydown = null;
      document.onkeyup = null;
    };
  }, []);

  return (
    <NavContainer aria-label="main navigation" space="0">
      <div>
        <MenuLabel expanded={expanded} toggleExpanded={toggleExpanded} />
        <MenuList expanded={expanded} />
      </div>
    </NavContainer>
  );
};
export default Nav;
