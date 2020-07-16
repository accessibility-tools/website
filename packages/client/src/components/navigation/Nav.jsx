import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import MenuLabel from "../menu/MenuLabel";
import MenuList from "../menu/MenuList";

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;

  & > * {
    background-color: ${color.white};
    align-items: center;
  }

  a {
    &:focus {
      border: 4px solid ${color.darkBlue};
      transition: border 0.3s ease-in-out;
    }
  }
`;

const Nav = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    document.onkeydown = e => {
      if (e.keyCode === 13) {
        e.target.classList.add(
          e.target.getAttribute("data-type") === "cta-btn"
            ? "key-press-prim"
            : "key-press"
        );
      }
    };

    document.onkeyup = e => {
      if (e.keyCode === 13) {
        e.target.classList.remove("key-press");
        e.target.classList.remove("key-press-prim");
      }
    };

    return () => {
      document.onkeydown = null;
      document.onkeyup = null;
    };
  }, []);

  return (
    <NavContainer aria-label="main navigation">
      <MenuLabel expanded={expanded} toggleExpanded={toggleExpanded} />
      <MenuList expanded={expanded} toggleExpanded={toggleExpanded} />
    </NavContainer>
  );
};

export default Nav;
