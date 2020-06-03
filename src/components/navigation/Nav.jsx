import React from "react";
import styled from "styled-components";
import { spacing } from "../../shared/style";
import NavMenu from "./NavMenu";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${spacing.padding.medium}px;
`;

const Nav = () => {
  return (
    <NavContainer>
      <NavMenu />
    </NavContainer>
  );
};
export default Nav;
