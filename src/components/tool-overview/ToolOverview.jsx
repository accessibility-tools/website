import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/Button";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import ComingSoon from "../badge/ComingSoonBadge";

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

const ToolOverview = ({ title, toolName, hasBadge, hasLink }) => (
  <Switcher threshold="40rem" space="3.5rem" width="100%">
    <div>
      <Center>
        <Img src={toolImages[toolName]} alt="" />
      </Center>
      <Center>
        <InfoWrapper>
          {hasBadge && <ComingSoon />}
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
