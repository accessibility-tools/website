import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/Button";
import Badge from "../badge/Badge";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";

// TODO: This is just an initial implementation, and needs maybe some rethinking when we actually have every detail for every tool that uses this component
const toolImages = {
  webChecker: "/illustrations/webchecker-placeholder.png",
  ciTool: "/illustrations/citool-placeholder.png",
};

const InfoWrapper = styled(Stack)`
  max-width: 25rem;
  text-align: left;
  margin: 0 1rem;
`;

const Img = styled.img`
  width: 70%;
`;

const StyledBadge = styled(Badge)`
  width: 50%;
`;

const ToolOverview = ({ title, toolName, hasBadge, hasLink }) => (
  <Switcher>
    <div>
      <Center>
        <Img src={toolImages[toolName]} alt="" />
      </Center>
      <Center>
        <InfoWrapper>
          {hasBadge && <StyledBadge level="critical" />}
          <h2>{title}</h2>
          <p>
            With our tool for web you can run a check for any website to detect
            and fix With our Command Line Tool you can run a check for any
            website to detect and fix accessibility issues. In addition you get
            introduced to best practices and guidlines. issues. In addition you
            get introduced to best practices and guidelines.
          </p>
          {hasLink && (
            <Button text="View on Github" isSecondary icon="github" />
          )}
        </InfoWrapper>
      </Center>
    </div>
  </Switcher>
);

ToolOverview.propTypes = {
  title: PropTypes.string.isRequired,
  toolName: PropTypes.string,
  hasBadge: PropTypes.bool.isRequired,
  hasLink: PropTypes.bool.isRequired,
};

export default ToolOverview;
