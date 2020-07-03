import React from "react";
import styled from "styled-components";
import { color } from "../../shared/style";
import Stack from "../layout-components/Stack";
import Link from "../links/Link";

const ElementContainer = styled(Stack)`
  margin-top: 0;
  padding: 2rem;

  &:nth-child(even) {
    background-color: ${color.extraLightPurple};
  }
`;

const SubTitle = styled.h5`
  max-width: none;
`;

const ElementList = styled.ul`
  li {
    list-style: disc;
  }
`;

const ElementLink = styled(Link)`
  font-size: initial;
  align-self: flex-end;
`;

const FixElement = () => (
  <ElementContainer>
    <SubTitle>
      1 element has insufficient color contrast of 2.35:1. The expected contrast
      ratio is 3:1.
    </SubTitle>
    <p>Fix any of the following:</p>
    <ElementList>
      <li>foreground color: #0ab587</li>
      <li>background color: #f2f2f2</li>
      <li>font size: 45pt</li>
      <li>font weight: bold</li>
    </ElementList>
    <ElementLink isExternal={true}>view element</ElementLink>
  </ElementContainer>
);

export default FixElement;
