import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../button/Button";
import Switcher from "../layout-components/Switcher";
import Stack from "../layout-components/Stack";
import Center from "../layout-components/Center";
import ComingSoon from "../badge/ComingSoonBadge";

const toolData = {
  ciTool: {
    img: "/illustrations/citool-placeholder.png",
    desc: `With our tool for web you can run a check for any website to detect
  and fix With our Command Line Tool you can run a check for any
  website to detect and fix accessibility issues. In addition you get
  introduced to best practices and guidlines. issues. In addition you
  get introduced to best practices and guidelines.`,
  },
  webChecker: {
    img: "/illustrations/webchecker-placeholder.png",
    desc: `With our free, open source tool for web you can run a check for any website to detect and fix accessibility issues. In addition you get introduced to best practices and guidlines.
  `,
  },
};

const InfoWrapper = styled(Stack)`
  max-width: 25rem;
  text-align: left;
  margin: 0 1rem;
`;

const ToolImg = styled.img`
  width: 60%;
`;

const ToolOverview = ({ title, toolName, hasBadge, hasLink }) => (
  <Switcher threshold="40rem" space="3.5rem" width="100%">
    <div>
      <Center>
        <ToolImg src={toolData[toolName].img} alt="image of the tool" />
      </Center>
      <Center>
        <InfoWrapper>
          {hasBadge && <ComingSoon />}
          <h2>{title}</h2>
          <p>{toolData[toolName].desc}</p>
          {hasLink && <Button text="View on Github" icon="extLink" />}
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
