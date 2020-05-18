import React from "react";
import styled from "styled-components";
import { spacing } from "../../shared/style";
import Link from "../links/Links";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: ${spacing.padding.medium}px;
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  & > :first-child {
    margin-right: 4px;
  }
  & > :last-child {
    margin-right: ${spacing.padding.small}px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink
        href="#"
        icon="creativeCommon1"
        text="Licence Name"
        isSecondary={true}
      />
      <Link href="#" text="imprint" isSecondary={true} />
    </StyledFooter>
  );
};

export default Footer;
