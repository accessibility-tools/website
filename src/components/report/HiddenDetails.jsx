import React from "react";
import styled from "styled-components";
import Stack from "../layout-components/Stack";
import Icon from "../icon/Icon";
import Link from "../links/Link";
import FixElement from "./FixElement";

const SubTitle = styled.p`
  font-weight: bold;
`;

const FailedWrapper = styled.div`
  svg {
    margin-right: 0.5rem;
  }
`;

const HiddenDetails = () => (
  <Stack space="medium">
    <Stack space="small">
      <SubTitle>Failed accessibility standards</SubTitle>
      <FailedWrapper>
        <Icon icon="extLink" />
        <span>WCAG 2 AA</span>
      </FailedWrapper>
      <FailedWrapper>
        <Icon icon="extLink" />
        <span>WCAG 1.4.3</span>
      </FailedWrapper>
      <Link icon="manicule" isExternal={true}>
        WHAT ARE ACCESSIBILITY STANDARDS?
      </Link>
    </Stack>
    <div>
      <SubTitle>Required fixes</SubTitle>
      <FixElement />
      <FixElement />
      <FixElement />
    </div>
  </Stack>
);

export default HiddenDetails;
