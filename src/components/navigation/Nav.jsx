import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import MenuLabel from "../menu/MenuLabel";
import MenuList from "../menu/MenuList";

const NavContainer = styled.nav`
  & > * {
    background-color: ${color.white};
    z-index: 999;
    align-items: center;
  }

  a {
    &:focus {
      border: 4px solid ${color.darkBlue};
      transition: border 0.3s ease-in-out;
    }
  }

  @media (min-width: 48rem) {
    padding: 0 1.5rem;
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
      <MenuLabel expanded={expanded} toggleExpanded={toggleExpanded} />
      <MenuList expanded={expanded} />
    </NavContainer>
  );
};
export default Nav;
