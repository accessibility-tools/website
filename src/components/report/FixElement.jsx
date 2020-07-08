import React from "react";
import PropTypes from "prop-types";
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
    padding: 0.5rem;
  }
`;

const ElementLink = styled(Link)`
  font-size: initial;
  align-self: flex-end;
`;

const FixElement = ({ fixDetails }) => (
  <ElementContainer>
    <SubTitle>{fixDetails.summary}</SubTitle>
    <p>Fix any of the following:</p>
    <ElementList>
      {fixDetails.tips.map((detail, index) => (
        <li key={`fix detail ${index}`}>{detail}</li>
      ))}
    </ElementList>
    <ElementLink href={fixDetails.link} isExternal={true}>
      view element
    </ElementLink>
  </ElementContainer>
);

FixElement.propTypes = {
  fixDetails: PropTypes.string,
};

export default FixElement;
